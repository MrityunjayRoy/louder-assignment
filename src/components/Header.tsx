'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { Settings, User, Menu, X, CalendarCheck } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Section 1: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-[var(--primary)] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-[var(--foreground)] tracking-tight">
                Event Concierge
              </span>
            </Link>
          </div>

          {/* Section 2: Navs */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="text-[var(--foreground)] bg-[var(--primary-subtle)] px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[var(--foreground)] hover:bg-[var(--surface)] px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Venues
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[var(--foreground)] hover:bg-[var(--surface)] px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Proposals
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[var(--foreground)] hover:bg-[var(--surface)] px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Analytics
            </Link>
          </nav>

          {/* Section 3: Actions (Dark Mode toggle, Settings, User Profile) */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            
            <div className="h-6 w-px bg-[var(--border)] mx-1" aria-hidden="true" />
            
            <button className="p-2 text-gray-500 hover:text-[var(--foreground)] hover:bg-[var(--surface)] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" aria-label="Settings">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-1 text-gray-500 hover:text-[var(--foreground)] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" aria-label="User Profile">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center overflow-hidden">
                <User className="w-4 h-4 text-[var(--foreground)]" />
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-[var(--foreground)] hover:bg-[var(--surface)] rounded-md focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navs & Actions Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--background)] border-b border-[var(--border)] absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-[var(--foreground)] bg-[var(--primary-subtle)]">
              Home
            </Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-400 hover:text-[var(--foreground)] hover:bg-[var(--surface)]">
              Venues
            </Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-400 hover:text-[var(--foreground)] hover:bg-[var(--surface)]">
              Proposals
            </Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-400 hover:text-[var(--foreground)] hover:bg-[var(--surface)]">
              Analytics
            </Link>
          </div>
          <div className="pt-4 pb-4 border-t border-[var(--border)] px-4">
            <div className="flex items-center gap-4 px-3">
              <div className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
                <User className="w-5 h-5 text-[var(--foreground)]" />
              </div>
              <div>
                <div className="text-base font-medium text-[var(--foreground)]">My Profile</div>
                <div className="text-sm font-medium text-gray-500 cursor-pointer hover:text-[var(--primary)] text-left flex items-center gap-1 mt-1">
                  <Settings className="w-4 h-4" /> Settings
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
