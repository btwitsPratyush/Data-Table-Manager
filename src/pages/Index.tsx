import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { DataTable } from '@/components/DataTable';
import { TableControls } from '@/components/TableControls';
import { Database } from 'lucide-react';

const Index = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-lg bg-primary p-3">
              <Database className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Data Table Manager
              </h1>
              <p className="text-muted-foreground">
                Manage, sort, and export your data with ease
              </p>
            </div>
          </div>

          {/* Controls */}
          <TableControls />

          {/* Table */}
          <DataTable />

          {/* Info Card */}
          <div className="mt-6 rounded-lg border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">💡 Pro Tips:</span> Double-click any cell to edit
              inline • Click column headers to sort • Use the search bar to filter data • Manage
              column visibility and add custom fields via the settings button
            </p>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default Index;
