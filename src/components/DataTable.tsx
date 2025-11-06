import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSortColumn, setCurrentPage, deleteRow, updateRow } from '@/store/tableSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Edit,
  Trash2,
} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';

export const DataTable = () => {
  const dispatch = useAppDispatch();
  const { data, columns, sortColumn, sortDirection, currentPage, rowsPerPage, searchQuery } =
    useAppSelector((state) => state.table);
  
  const [editingCell, setEditingCell] = useState<{ rowId: string; columnId: string } | null>(null);
  const [editValue, setEditValue] = useState('');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState<string | null>(null);

  const visibleColumns = columns.filter((col) => col.visible);

  // Filter data based on search query
  const filteredData = data.filter((row) =>
    visibleColumns.some((col) =>
      String(row[col.id]).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    const aVal = a[sortColumn];
    const bVal = b[sortColumn];
    
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    }
    
    const aStr = String(aVal).toLowerCase();
    const bStr = String(bVal).toLowerCase();
    
    if (sortDirection === 'asc') {
      return aStr.localeCompare(bStr);
    }
    return bStr.localeCompare(aStr);
  });

  // Paginate data
  const paginatedData = sortedData.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  const handleSort = (columnId: string) => {
    dispatch(setSortColumn(columnId));
  };

  const handleCellDoubleClick = (rowId: string, columnId: string, value: string | number) => {
    setEditingCell({ rowId, columnId });
    setEditValue(String(value));
  };

  const handleCellEdit = (rowId: string, columnId: string) => {
    const row = data.find((r) => r.id === rowId);
    if (row) {
      const column = columns.find((c) => c.id === columnId);
      const isNumeric = column?.id === 'age';
      const newValue = isNumeric ? Number(editValue) : editValue;
      
      dispatch(updateRow({ ...row, [columnId]: newValue }));
      toast.success('Cell updated successfully');
    }
    setEditingCell(null);
  };

  const handleDeleteClick = (rowId: string) => {
    setRowToDelete(rowId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (rowToDelete) {
      dispatch(deleteRow(rowToDelete));
      toast.success('Row deleted successfully');
    }
    setDeleteDialogOpen(false);
    setRowToDelete(null);
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm dark:border-gray-700 dark:bg-gray-800/60">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-table-border bg-muted/50 dark:border-gray-700 dark:bg-gray-700/50">
              {visibleColumns.map((column) => (
                <th
                  key={column.id}
                  className="cursor-pointer select-none px-6 py-4 text-left text-sm font-semibold text-foreground transition-colors hover:bg-muted dark:text-white dark:hover:bg-gray-600"
                  onClick={() => handleSort(column.id)}
                >
                  <div className="flex items-center gap-2">
                    {column.label}
                    {sortColumn === column.id && (
                      <span className="text-primary">
                        {sortDirection === 'asc' ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr
                key={row.id}
                className={`border-b border-table-border transition-colors ${index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'} hover:bg-gray-100 dark:hover:bg-gray-700`}
              >
                {visibleColumns.map((column) => (
                  <td
                    key={`${row.id}-${column.id}`}
                    className="px-6 py-4 text-sm text-foreground dark:text-gray-300"
                    onDoubleClick={() => handleCellDoubleClick(row.id, column.id, row[column.id])}
                  >
                    {editingCell?.rowId === row.id && editingCell?.columnId === column.id ? (
                      <Input
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={() => handleCellEdit(row.id, column.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleCellEdit(row.id, column.id);
                          } else if (e.key === 'Escape') {
                            setEditingCell(null);
                          }
                        }}
                        className="h-8 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        autoFocus
                      />
                    ) : (
                      <span>{row[column.id]}</span>
                    )}
                  </td>
                ))}
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteClick(row.id)}
                      className="h-8 w-8 p-0 text-red-500 hover:bg-red-500/10 hover:text-red-600 dark:text-red-400 dark:hover:bg-red-900/20 transition-all duration-300 glow-effect-red"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {currentPage * rowsPerPage + 1} to{' '}
          {Math.min((currentPage + 1) * rowsPerPage, sortedData.length)} of {sortedData.length}{' '}
          entries
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => dispatch(setCurrentPage(currentPage - 1))}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">
            Page {currentPage + 1} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
            disabled={currentPage >= totalPages - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the row from your table.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
