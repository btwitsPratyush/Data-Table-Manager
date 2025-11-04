import { useRef, useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { importData, addColumn } from '@/store/tableSlice';
import Papa from 'papaparse';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Upload, FileText } from 'lucide-react';
import { toast } from 'sonner';

interface CSVImportProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CSVImport = ({ open, onOpenChange }: CSVImportProps) => {
  const dispatch = useAppDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.csv')) {
      toast.error('Please select a valid CSV file');
      return;
    }

    setFileName(file.name);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const data = results.data as Record<string, string>[];
          
          if (data.length === 0) {
            toast.error('CSV file is empty');
            return;
          }

          // Convert to table rows with IDs, ensuring required fields exist
          const rows = data.map((row, index) => ({
            id: String(Date.now() + index),
            name: row.name || '',
            email: row.email || '',
            age: row.age ? Number(row.age) : 0,
            role: row.role || '',
            ...row,
          }));

          // Add any new columns from CSV
          const csvColumns = Object.keys(data[0]);
          csvColumns.forEach((columnId) => {
            if (!['id', 'name', 'email', 'age', 'role'].includes(columnId)) {
              dispatch(addColumn({
                id: columnId,
                label: columnId.charAt(0).toUpperCase() + columnId.slice(1),
              }));
            }
          });

          dispatch(importData(rows));
          toast.success(`Successfully imported ${rows.length} rows`);
          onOpenChange(false);
          setFileName(null);
        } catch (error) {
          toast.error('Error parsing CSV file');
          console.error(error);
        }
      },
      error: (error) => {
        toast.error('Error reading CSV file');
        console.error(error);
      },
    });
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Import CSV File</DialogTitle>
          <DialogDescription>
            Upload a CSV file to import data into your table. The file should include headers
            matching your column names.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div
            className="flex cursor-pointer flex-col items-center gap-4 rounded-lg border-2 border-dashed border-border p-8 transition-colors hover:border-primary"
            onClick={handleButtonClick}
          >
            <div className="rounded-full bg-primary/10 p-4">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <div className="text-center">
              <p className="font-medium">Click to upload or drag and drop</p>
              <p className="text-sm text-muted-foreground">CSV files only</p>
            </div>
            {fileName && (
              <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-2">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{fileName}</span>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept=".csv"
            onChange={handleFileSelect}
            className="hidden"
          />

          <div className="rounded-lg bg-muted p-4 text-sm">
            <p className="font-medium">Expected CSV format:</p>
            <pre className="mt-2 text-xs text-muted-foreground">
              name,email,age,role{'\n'}
              John Doe,john@example.com,30,Developer
            </pre>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
