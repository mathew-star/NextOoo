// src/components/providers/Providers.js
'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ThemeProvider from '@/components/providers/ThemeProvider'; 
// If your ThemeProvider is elsewhere, adjust the import path.

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        // we will enable suspense globally so we can use Suspense fallbacks
        suspense: true,
        retry: 1,
        staleTime: 1000 * 60 * 1, // 1 minute
      },
      mutations: {
        // sensible defaults
        retry: 0,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
      {/* Devtools are client-only and helpful while developing */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
