import ThemeToggle from '@/components/theme/themeToggle';

/**
 * Home Page
 * Main landing page with theme toggle demo
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">
              Next.js Theme Demo
            </h1>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <section className="text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Professional Theme Management
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              Built with Next.js 15, Zustand for state management, and Tailwind CSS v4.1. 
              Features persistent theme preferences with system theme detection.
            </p>
          </section>

          {/* Feature Cards */}
          <section className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Light Mode"
              description="Clean and bright interface for daytime use"
              icon="☀️"
            />
            <FeatureCard
              title="Dark Mode"
              description="Easy on the eyes for low-light environments"
              icon="🌙"
            />
            <FeatureCard
              title="System Theme"
              description="Automatically matches your OS preferences"
              icon="💻"
            />
            <FeatureCard
              title="Zustand Store"
              description="Lightweight state management with persistence"
              icon="📦"
            />
            <FeatureCard
              title="No Flash"
              description="Smooth theme transitions without FOUC"
              icon="⚡"
            />
            <FeatureCard
              title="Production Ready"
              description="Professional code structure and best practices"
              icon="🚀"
            />
          </section>

          {/* Code Example */}
          <section className="mt-16">
            <h3 className="text-2xl font-bold">Quick Usage</h3>
            <div className="mt-4 overflow-hidden rounded-lg bg-gray-100 p-6 dark:bg-gray-900">
              <pre className="text-sm">
                <code className="text-gray-800 dark:text-gray-200">
{`import useThemeStore from '@/store/useThemeStore';

function MyComponent() {
  const { theme, setTheme } = useThemeStore();
  
  return (
    <button onClick={() => setTheme('dark')}>
      Current: {theme}
    </button>
  );
}`}
                </code>
              </pre>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

/**
 * Feature Card Component
 * Reusable card for displaying features
 */
function FeatureCard({ title, description, icon }) {
  return (
    <div className="relative rounded-2xl border border-gray-200 p-8 dark:border-gray-800">
      <div className="text-4xl" role="img" aria-hidden="true">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}