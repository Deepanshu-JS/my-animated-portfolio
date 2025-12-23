import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-muted border border-border
                 transition-all duration-500 ease-in-out
                 hover:border-primary/50 group overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Background gradient animation */}
      <div className={`absolute inset-0 rounded-full transition-opacity duration-500
                       ${isDark ? 'opacity-100' : 'opacity-0'}
                       bg-gradient-to-r from-indigo-900/50 via-purple-900/30 to-indigo-900/50`} />
      <div className={`absolute inset-0 rounded-full transition-opacity duration-500
                       ${isDark ? 'opacity-0' : 'opacity-100'}
                       bg-gradient-to-r from-amber-200/30 via-orange-100/20 to-amber-200/30`} />
      
      {/* Toggle circle */}
      <div 
        className={`absolute top-0.5 w-6 h-6 rounded-full
                    flex items-center justify-center
                    transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
                    ${isDark 
                      ? 'left-0.5 bg-gradient-to-br from-indigo-400 to-purple-600 shadow-lg shadow-purple-500/30' 
                      : 'left-[calc(100%-1.625rem)] bg-gradient-to-br from-amber-300 to-orange-500 shadow-lg shadow-orange-500/30'
                    }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-white animate-[spin_0.5s_ease-out]" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-white animate-[spin_0.5s_ease-out]" />
        )}
      </div>
      
      {/* Stars for dark mode */}
      <div className={`absolute right-2 top-1/2 -translate-y-1/2 transition-opacity duration-300
                       ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex gap-0.5">
          <div className="w-1 h-1 rounded-full bg-white/60 animate-pulse" />
          <div className="w-0.5 h-0.5 rounded-full bg-white/40 animate-pulse delay-100" />
        </div>
      </div>
      
      {/* Rays for light mode */}
      <div className={`absolute left-2 top-1/2 -translate-y-1/2 transition-opacity duration-300
                       ${isDark ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60 animate-pulse" />
      </div>
    </button>
  );
};

export default ThemeToggle;
