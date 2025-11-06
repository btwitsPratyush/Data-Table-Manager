import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSearchQuery } from '@/store/tableSlice';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Settings, Upload } from 'lucide-react';
import { ColumnManager } from './ColumnManager';
import { CSVImport } from './CSVImport';
import { CSVExport } from './CSVExport';
import { ThemeToggle } from './ThemeToggle';
import { useState } from 'react';

export const TableControls = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.table.searchQuery);
  const [columnManagerOpen, setColumnManagerOpen] = useState(false);
  const [importDialogOpen, setImportDialogOpen] = useState(false);

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search across all columns..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="pl-9"
          />
        </div>
        
        <div className="flex gap-2">
<<<<<<< HEAD
=======
          <ThemeToggle />
>>>>>>> 6c8ca7fb924c61483c348767e2ed44e61b0a09f6
          
          <Button
            variant="outline"
            onClick={() => setImportDialogOpen(true)}
            className="gap-2"
          >
            <Upload className="h-4 w-4" />
            Import CSV
          </Button>
          
          <CSVExport />
          
          <Button
            variant="outline"
            onClick={() => setColumnManagerOpen(true)}
            className="gap-2"
          >
            <Settings className="h-4 w-4" />
            Manage Columns
          </Button>
        </div>
      </div>

      <ColumnManager open={columnManagerOpen} onOpenChange={setColumnManagerOpen} />
      <CSVImport open={importDialogOpen} onOpenChange={setImportDialogOpen} />
    </>
  );
};
