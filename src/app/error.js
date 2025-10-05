'use client'; // error.js is typically a client component in app dir
import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
          An unexpected error occurred. Try refreshing the page.
        </p>
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
