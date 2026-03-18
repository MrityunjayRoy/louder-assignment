'use client';

import { useTheme } from './ThemeContext';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-gray-500 hover:text-[var(--primary)] transition-colors dark:text-gray-400"
      aria-label="Toggle dark mode"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}
