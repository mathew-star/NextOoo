export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse space-y-2 w-full max-w-2xl p-4">
        <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-1/3" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded" />
        <div className="h-72 bg-slate-200 dark:bg-slate-700 rounded" />
      </div>
    </div>
  );
}
