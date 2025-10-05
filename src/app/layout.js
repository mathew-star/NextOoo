import { Inter } from 'next/font/google';
import Providers from '@/components/providers/Provider';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js App with Theme Management',
  description: 'Professional Next.js setup with Zustand theme management',
};

/**
 * Root Layout
 * Wraps the entire application
 * Includes ThemeProvider for global theme management
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of unstyled content */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme-storage');
                if (theme) {
                  const { state } = JSON.parse(theme);
                  const themeMode = state?.theme || 'system';
                  let resolvedTheme = themeMode;
                  
                  if (themeMode === 'system') {
                    resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                      ? 'dark'
                      : 'light';
                  }
                  
                  document.documentElement.classList.add(resolvedTheme);
                }
              } catch (e) {
                console.error('Theme initialization error:', e);
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-950 dark:text-white`}>
        <Providers>
          <Header />
          <main className="max-w-5xl mx-auto p-4 h-screen">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}