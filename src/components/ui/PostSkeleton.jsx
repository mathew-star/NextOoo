export default function PostSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="border rounded p-4 space-y-2">
          <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
        </div>
      ))}
    </div>
  );
}
