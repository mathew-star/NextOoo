import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

/**
 * Theme Store
 * Manages application theme state with localStorage persistence
 * Supports: light, dark, and system themes
 */
const useThemeStore = create(
  persist(
    (set, get) => ({
      // Current theme mode: 'light' | 'dark' | 'system'
      theme: 'system',
      
      // Resolved theme after system preference is applied
      resolvedTheme: null,

      /**
       * Set theme mode
       * @param {string} newTheme - 'light' | 'dark' | 'system'
       */
      setTheme: (newTheme) => {
        set({ theme: newTheme });
        
        // Apply theme to document
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        
        let resolvedTheme = newTheme;
        
        if (newTheme === 'system') {
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
          resolvedTheme = systemTheme;
        }
        
        root.classList.add(resolvedTheme);
        set({ resolvedTheme });
      },

      /**
       * Toggle between light and dark
       * If current is system, it toggles to opposite of system preference
       */
      toggleTheme: () => {
        const currentTheme = get().theme;
        const currentResolved = get().resolvedTheme;
        
        if (currentTheme === 'system') {
          // Toggle to opposite of current system preference
          const newTheme = currentResolved === 'dark' ? 'light' : 'dark';
          get().setTheme(newTheme);
        } else {
          // Toggle between light and dark
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
          get().setTheme(newTheme);
        }
      },

      /**
       * Initialize theme on app load
       * Should be called once on mount
       */
      initializeTheme: () => {
        const storedTheme = get().theme;
        get().setTheme(storedTheme);
        
        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
          const currentTheme = get().theme;
          if (currentTheme === 'system') {
            get().setTheme('system'); // Re-apply to update resolved theme
          }
        };
        
        mediaQuery.addEventListener('change', handleChange);
        
        // Cleanup function (store in a way that can be called later if needed)
        return () => mediaQuery.removeEventListener('change', handleChange);
      },
    }),
    {
      name: 'theme-storage', // localStorage key
      storage: createJSONStorage(() => localStorage),
      // Only persist the theme mode, not resolved theme
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);

export default useThemeStore;