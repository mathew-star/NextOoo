'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { useFavoritesStore } from '@/store/useFavoritesStore';

export default function PostCard({ post }) {
  const toggle = useFavoritesStore((s) => s.toggle);
  const isFav = useFavoritesStore((s) => s.items.includes(post.id));

  return (
    <article className="border rounded p-4 theme-transition hover:shadow">
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-semibold">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </h2>
        <button
          onClick={() => toggle(post.id)}
          aria-pressed={isFav}
          className={clsx("px-2 py-1 rounded", isFav ? 'bg-yellow-300' : 'bg-slate-200 dark:bg-slate-700')}
        >
          {isFav ? '★' : '☆'}
        </button>
      </div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {post.body.slice(0, 140)}{post.body.length > 140 ? '…' : ''}
      </p>
    </article>
  );
}
