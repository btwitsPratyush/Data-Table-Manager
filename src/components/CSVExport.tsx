import { useAppSelector } from '@/store/hooks';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Papa from 'papaparse';
import { saveAs } from 'file-saver';
import { toast } from 'sonner';

export const CSVExport = () => {
  const { data, columns } = useAppSelector((state) => state.table);

  const handleExport = () => {
    try {
      const visibleColumns = columns.filter((col) => col.visible);
      
      // Prepare data with only visible columns
      const exportData = data.map((row) => {
        const exportRow: Record<string, string | number> = {};
        visibleColumns.forEach((col) => {
          exportRow[col.label] = row[col.id];
        });
        return exportRow;
      });

      // Convert to CSV
      const csv = Papa.unparse(exportData);
      
      // Create blob and download
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, `table-export-${new Date().toISOString().split('T')[0]}.csv`);
      
      toast.success('Table exported successfully');
    } catch (error) {
      toast.error('Error exporting table');
      console.error(error);
    }
  };

  return (
    <Button variant="outline" onClick={handleExport} className="gap-2">
      <Download className="h-4 w-4" />
      Export CSV
    </Button>
  );
};
