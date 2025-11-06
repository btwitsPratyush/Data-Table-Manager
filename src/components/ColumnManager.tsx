import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleColumnVisibility, addColumn } from '@/store/tableSlice';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

interface ColumnManagerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ColumnManager = ({ open, onOpenChange }: ColumnManagerProps) => {
  const dispatch = useAppDispatch();
  const columns = useAppSelector((state) => state.table.columns);
  const [newColumnId, setNewColumnId] = useState('');
  const [newColumnLabel, setNewColumnLabel] = useState('');

  const handleAddColumn = () => {
    if (!newColumnId || !newColumnLabel) {
      toast.error('Please fill in both fields');
      return;
    }
    
    if (columns.some((col) => col.id === newColumnId)) {
      toast.error('Column with this ID already exists');
      return;
    }

    dispatch(addColumn({ id: newColumnId, label: newColumnLabel }));
    setNewColumnId('');
    setNewColumnLabel('');
    toast.success('Column added successfully');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Manage Columns</DialogTitle>
          <DialogDescription>
            Toggle column visibility or add new custom fields to your table.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Existing Columns */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold">Column Visibility</Label>
            <div className="space-y-2 rounded-lg border border-border p-4">
              {columns.map((column) => (
                <div key={column.id} className="flex items-center gap-3">
                  <Checkbox
                    id={column.id}
                    checked={column.visible}
                    onCheckedChange={() => dispatch(toggleColumnVisibility(column.id))}
                  />
                  <Label
                    htmlFor={column.id}
                    className="cursor-pointer text-sm font-normal"
                  >
                    {column.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Add New Column */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold">Add New Column</Label>
            <div className="space-y-3 rounded-lg border border-border p-4">
              <div className="space-y-2">
                <Label htmlFor="columnId" className="text-xs">
                  Column ID (lowercase, no spaces)
                </Label>
                <Input
                  id="columnId"
                  placeholder="e.g., department"
                  value={newColumnId}
                  onChange={(e) => setNewColumnId(e.target.value.toLowerCase().replace(/\s/g, ''))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="columnLabel" className="text-xs">
                  Column Label
                </Label>
                <Input
                  id="columnLabel"
                  placeholder="e.g., Department"
                  value={newColumnLabel}
                  onChange={(e) => setNewColumnLabel(e.target.value)}
                />
              </div>
              <Button onClick={handleAddColumn} className="w-full gap-2">
                <Plus className="h-4 w-4" />
                Add Column
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

