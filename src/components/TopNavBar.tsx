import { ThemeToggle } from "./ThemeToggle";

export function TopNavBar() {
  return (
    <nav className="bg-card border-b border-border p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="7" height="7" rx="1" fill="#dc2626" />
            <rect x="14" y="3" width="7" height="7" rx="1" fill="#3b82f6" />
            <rect x="3" y="14" width="7" height="7" rx="1" fill="#3b82f6" />
            <rect x="14" y="14" width="7" height="7" rx="1" fill="#dc2626" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-blue-600" style={{ fontFamily: 'cursive' }}>
          Dynamic Data Table Manager
        </h1>
      </div>
      <ThemeToggle />
    </nav>
  );
}