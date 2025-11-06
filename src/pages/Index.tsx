import { Provider } from 'react-redux';

import { store } from '@/store/store';

import { DataTable } from '@/components/DataTable';
import { TableControls } from '@/components/TableControls';
import { Database } from 'lucide-react';


// Reusable card for Quick Tips and Features
const InfoCard = ({
  icon,
  title,
  gradient,
  tips
}: {
  icon: string
  title: string
  tips: { emoji: string; text: string }[]
}) => (
  <div className="rounded-xl border border-border bg-card p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
    <div className="absolute inset-0 bg-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    <h3 className="font-bold text-xl text-foreground mb-4 flex items-center gap-3 relative z-10">
      <span className={`text-3xl ${title === "Quick Tips" ? "animate-bounce" : "animate-pulse"}`}>{icon}</span>
      <span className="text-blue-500 font-extrabold">
        {title}
      </span>
    </h3>
    <ul className="text-sm text-muted-foreground space-y-4 relative z-10">
      {tips.map((tip, idx) => (
        <li
          key={idx}
          className="flex items-start gap-3 group hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent p-2 rounded-lg transition-all duration-200"
        >
          <span className="text-primary mt-0.5 text-lg group-hover:scale-125 group-hover:rotate-12 transition-transform duration-200">
            {tip.emoji}
          </span>
          <span className="group-hover:text-foreground transition-colors leading-relaxed">
            {tip.text}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

import { TopNavBar } from '@/components/TopNavBar';

const Index = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-background flex flex-col">
        <TopNavBar />


        <div className="flex-1 py-8">
          <div className="container mx-auto px-4">


            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-8">
              <div className="group rounded-xl border border-border bg-gradient-to-br from-card to-accent/20 p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-primary to-primary/80 p-3 shadow-[var(--shadow-primary)] group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-6 w-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">CSV Import/Export</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Seamlessly import and export data with automatic column detection and validation
                    </p>
                  </div>
                </div>
              </div>
              <div className="group rounded-xl border border-border bg-gradient-to-br from-card to-accent/20 p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-primary to-primary/80 p-3 shadow-[var(--shadow-primary)] group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-6 w-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Inline Editing</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Edit any cell directly with a simple double-click for instant data updates
                    </p>
                  </div>
                </div>
              </div>
              <div className="group rounded-xl border border-border bg-gradient-to-br from-card to-accent/20 p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-primary to-primary/80 p-3 shadow-[var(--shadow-primary)] group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-6 w-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Dynamic Columns</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Add, remove, and toggle column visibility dynamically to fit your workflow
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <TableControls />

            {/* Table */}
            <DataTable />

            {/* Info Cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoCard
                icon="💡"
                title="Quick Tips"
                tips={[
                  { emoji: "✨", text: "Double-click any cell for instant inline editing" },
                  { emoji: "🔄", text: "Sort ascending/descending by clicking column headers" },
                  { emoji: "🔍", text: "Filter data across all columns using global search" },
                  { emoji: "⚙️", text: "Show, hide, or add columns dynamically to customize your workflow" }
                ]}
              />
              <InfoCard
                icon="🚀"
                title="Features"
                tips={[
                  { emoji: "⚛️", text: "Modern stack: React 18, TypeScript & Redux Toolkit" },
                  { emoji: "📱", text: "Fully responsive for smooth use on any device" },
                  { emoji: "📄", text: "Seamless CSV import & export with auto-column detection" },
                  { emoji: "⬇️", text: "Instantly export your filtered data as CSV with one click" }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-border bg-gradient-to-br from-card to-accent/30">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* Feature Summary */}
              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  A modern, full-featured data table management system built with React, TypeScript, and Redux Toolkit. Designed for professionals who need powerful data manipulation capabilities in an intuitive, beautiful interface. Enjoy advanced features like real-time editing, CSV operations, and dynamic column control.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Powered by:</span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1.5 text-xs rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary font-bold border border-primary/20 hover:scale-105 transition-transform">React</span>
                    <span className="px-3 py-1.5 text-xs rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary font-bold border border-primary/20 hover:scale-105 transition-transform">TypeScript</span>
                    <span className="px-3 py-1.5 text-xs rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary font-bold border border-primary/20 hover:scale-105 transition-transform">Redux</span>
                    <span className="px-3 py-1.5 text-xs rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary font-bold border border-primary/20 hover:scale-105 transition-transform">Tailwind</span>
                  </div>
                </div>
              </div>
              {/* Features */}
              <div>
                <h4 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <span className="h-1 w-8 bg-gradient-to-r from-primary to-purple-600 rounded-full"></span>
                  Key Features
                </h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform flex items-center gap-2">
                    <span className="text-primary">→</span> Inline Editing
                  </li>
                  <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform flex items-center gap-2">
                    <span className="text-primary">→</span> CSV Import/Export
                  </li>
                  <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform flex items-center gap-2">
                    <span className="text-primary">→</span> Column Management
                  </li>
                  <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform flex items-center gap-2">
                    <span className="text-primary">→</span> Advanced Sorting
                  </li>
                  <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform flex items-center gap-2">
                    <span className="text-primary">→</span> Global Search
                  </li>
                </ul>
              </div>
              {/* Technologies */}
              <div>
                <h4 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <span className="h-1 w-8 bg-gradient-to-r from-primary to-purple-600 rounded-full"></span>
                  Tech Stack
                </h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform flex items-center gap-2">
                    <span className="text-primary">→</span> React 18.3
                  </li>
                  <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform flex items-center gap-2">
                    <span className="text-primary">→</span> Redux Toolkit 2.10
                  </li>
                  <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform flex items-center gap-2">
                    <span className="text-primary">→</span> Tailwind CSS
                  </li>
                  <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform flex items-center gap-2">
                    <span className="text-primary">→</span> PapaParse
                  </li>
                  <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform flex items-center gap-2">
                    <span className="text-primary">→</span> Vite
                  </li>
                </ul>
              </div>
            </div>
            {/* Bottom Bar */}
            <div className="mt-10 pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                © {new Date().getFullYear()} Data Table Manager. Built with
                <span className="text-red-500 animate-pulse">❤️</span>
                using modern web technologies.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer font-medium">Documentation</span>
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer font-medium">GitHub</span>
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer font-medium">Support</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Provider>
  );
};

export default Index;

