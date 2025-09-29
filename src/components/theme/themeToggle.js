'use client';

import useThemeStore from '@/store/useThemeStore';

/**
 * ThemeToggle Component
 * Provides UI for switching between light, dark, and system themes
 */
export default function ThemeToggle() {
    const theme = useThemeStore((state) => state.theme);
    const setTheme = useThemeStore((state) => state.setTheme);

  const themes = [
    { value: 'light', label: 'Light', icon: '☀️' },
    { value: 'dark', label: 'Dark', icon: '🌙' },
    { value: 'system', label: 'System', icon: '💻' },
  ];

  return (
    <div className="inline-flex items-center gap-2 rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
      {themes.map((themeOption) => (
        <button
          key={themeOption.value}
          onClick={() => setTheme(themeOption.value)}
          className={`
            flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium
            transition-all duration-200
            ${
              theme === themeOption.value
                ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            }
          `}
          aria-label={`Switch to ${themeOption.label} theme`}
          aria-pressed={theme === themeOption.value}
        >
          <span className="text-lg" role="img" aria-hidden="true">
            {themeOption.icon}
          </span>
          <span className="hidden sm:inline">{themeOption.label}</span>
        </button>
      ))}
    </div>
  );
}