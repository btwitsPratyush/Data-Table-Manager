import React from 'react';

export function DynamicNavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-gradient-to-r from-white/60 via-white/40 to-white/60 dark:from-gray-900/70 dark:via-gray-800/70 dark:to-gray-900/70 border-b border-white/20 shadow-lg transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo + App Name */}
        <div className="flex items-center space-x-3">
          {/* Glowing Gradient Logo */}
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-white shadow-lg ring-2 ring-white/50 hover:scale-105 transition-transform duration-300">
            <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-white drop-shadow-sm">
            Dynamic Data Table Manager
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {['Browse Marketplace', 'Request Swaps', 'Docs', 'About'].map((link) => (
            <a
              key={link}
              href="#"
              className="relative text-gray-700 dark:text-gray-300 font-medium hover:text-red-500 transition-colors duration-300 group"
            >
              {link}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </div>

        {/* Profile Icon */}
        <button className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}