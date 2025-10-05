'use client';

export default function PostsError({ error, reset }) {
  return (
    <div className="p-6 border rounded bg-red-100 dark:bg-red-900">
      <h2 className="text-lg font-semibold mb-2">Error loading posts</h2>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Retry
      </button>
    </div>
  );
}
