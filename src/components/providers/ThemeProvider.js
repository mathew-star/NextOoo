'use client';

import { useEffect } from 'react';
import useThemeStore from '@/store/useThemeStore';

/**
 * ThemeProvider Component
 * Initializes theme on app mount and handles theme changes
 * Must be a Client Component due to localStorage access
 */
export default function ThemeProvider({ children }) {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);

  useEffect(() => {
    // Initialize theme and set up system theme listener
    const cleanup = initializeTheme();
    
    // Cleanup on unmount
    return cleanup;
  }, [initializeTheme]);

  return <>{children}</>;
}