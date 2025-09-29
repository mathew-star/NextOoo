import useThemeStore from '@/store/useThemeStore';

/**
 * Custom hook for theme management
 * Provides a cleaner API for accessing theme state
 * 
 * @returns {Object} Theme state and actions
 * @example
 * const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
 */
export function useTheme() {
  const theme = useThemeStore((state) => state.theme);
  const resolvedTheme = useThemeStore((state) => state.resolvedTheme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
  };
}

export default useTheme;