import { jsonPlaceholderFetch } from '../../lib/fetcher';
import Link from 'next/link';

export default async function UsersPage() {
  const users = await jsonPlaceholderFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="grid gap-4">
        {users.map((u) => (
          <li key={u.id} className="border rounded p-4 theme-transition">
            <h2 className="font-semibold">{u.name}</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {u.email}
            </p>
            <Link
              href={`/posts?userId=${u.id}`}
              className="mt-2 inline-block text-blue-600 hover:underline"
            >
              View Posts
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
