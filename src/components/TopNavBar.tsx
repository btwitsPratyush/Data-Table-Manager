import { ThemeToggle } from "./ThemeToggle";

export function TopNavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-gradient-to-r from-white/70 via-white/50 to-white/70 dark:from-gray-900/80 dark:via-gray-800/70 dark:to-gray-900/80 border-b border-white/20 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="relative w-11 h-11 rounded-xl flex items-center justify-center shadow-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 ring-1 ring-white/30">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" rx="1" fill="#fffcfcff" />
              <rect x="14" y="3" width="7" height="7" rx="1" fill=
              \\\#8d2deeff" />
              <rect x="3" y="14" width="7" height="7" rx="1" fill="#a522fcff" />
              <rect x="14" y="14" width="7" height="7" rx="1" fill="#ffffffff" />
            </svg>
          </div>

          {/* App Title */}
          <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-white-500 to-blue-500 drop-shadow-sm">
            Dynamic Data Table Manager
          </h1>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          {/* Optional links (can remove if not needed) */}
          <a
            href="#"
            className="hidden sm:inline text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group"
          >
            Docs
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a
            href="#"
            className="hidden sm:inline text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group"
          >
            About
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}