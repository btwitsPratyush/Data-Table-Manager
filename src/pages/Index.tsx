import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { DataTable } from '@/components/DataTable';
import { TableControls } from '@/components/TableControls';
import { Database } from 'lucide-react';

const Index = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 py-8">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-primary p-3 shadow-lg">
                  <Database className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-foreground">
                    Dynamic Data Table Manager
                  </h1>
                  <p className="text-lg text-muted-foreground mt-1">
                    A powerful, feature-rich data management solution
                  </p>
                </div>
              </div>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="rounded-lg border border-border bg-card p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="rounded-md bg-primary/10 p-2">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">CSV Import/Export</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Seamlessly import and export data with automatic column detection
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-card p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="rounded-md bg-primary/10 p-2">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Inline Editing</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Edit any cell directly with a simple double-click for quick updates
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-card p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="rounded-md bg-primary/10 p-2">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Dynamic Columns</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Add, remove, and toggle column visibility to fit your needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <TableControls />

            {/* Table */}
            <DataTable />

            {/* Info Cards */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-xl">💡</span> Quick Tips
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Double-click any cell to edit data inline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Click column headers to sort ascending or descending</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Use the global search to filter across all columns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Manage columns to show/hide fields or add custom ones</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-xl">🚀</span> Features
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Built with React 18, TypeScript & Redux Toolkit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Responsive design that works on all devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>CSV import with automatic column detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Export visible data to CSV with one click</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-border bg-card">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* About */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="rounded-md bg-primary p-2">
                    <Database className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Data Table Manager</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  A modern, full-featured data table management system built with React, TypeScript, 
                  and Redux Toolkit. Designed for professionals who need powerful data manipulation 
                  capabilities with an intuitive interface.
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">Built with:</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary font-medium">React</span>
                    <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary font-medium">TypeScript</span>
                    <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary font-medium">Redux</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="hover:text-foreground transition-colors cursor-default">Inline Editing</li>
                  <li className="hover:text-foreground transition-colors cursor-default">CSV Import/Export</li>
                  <li className="hover:text-foreground transition-colors cursor-default">Column Management</li>
                  <li className="hover:text-foreground transition-colors cursor-default">Advanced Sorting</li>
                  <li className="hover:text-foreground transition-colors cursor-default">Global Search</li>
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="hover:text-foreground transition-colors cursor-default">React 18.3</li>
                  <li className="hover:text-foreground transition-colors cursor-default">Redux Toolkit 2.10</li>
                  <li className="hover:text-foreground transition-colors cursor-default">Tailwind CSS</li>
                  <li className="hover:text-foreground transition-colors cursor-default">PapaParse</li>
                  <li className="hover:text-foreground transition-colors cursor-default">Vite</li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Data Table Manager. Built with ❤️ using modern web technologies.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="hover:text-foreground transition-colors cursor-pointer">Documentation</span>
                <span className="hover:text-foreground transition-colors cursor-pointer">GitHub</span>
                <span className="hover:text-foreground transition-colors cursor-pointer">Support</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Provider>
  );
};

export default Index;
