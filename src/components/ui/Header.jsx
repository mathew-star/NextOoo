// src/components/ui/Header.js
'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/theme/themeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b dark:border-slate-800 theme-transition">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="flex gap-4">
          <Link href="/" className="font-semibold hover:underline">
            Home
          </Link>
          <Link href="/users" className="font-semibold hover:underline">
            Users
          </Link>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
