'use client';

import React from 'react';
import Link from 'next/link';
import { CalendarCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--surface)] border-t border-[var(--border)] py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-[var(--primary)] flex items-center justify-center text-white">
            <CalendarCheck className="w-3 h-3" />
          </div>
          <span className="text-base font-bold text-[var(--foreground)]">Event Concierge</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-2 border-l border-[var(--border)] pl-2">
            © {new Date().getFullYear()}
          </span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--primary)] transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--primary)] transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--primary)] transition-colors">
            Contact
          </Link>
          <Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--primary)] transition-colors">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}
