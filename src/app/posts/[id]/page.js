import { jsonPlaceholderFetch } from '@/lib/fetcher';

export default async function PostPage({ params }) {
  const { id } = await params;
  // server fetch for the post itself (fast SSR)
  const post = await jsonPlaceholderFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="mb-6 text-slate-700 dark:text-slate-300">{post.body}</p>

      {/* Comments: client interactive area */}
      <section>
        {/* We'll make CommentsClient a client component that uses react-query for comments + mutations */}
        {/* Import client component dynamically to ensure proper separation */}
        {/* Use dynamic import or direct import if file in components is 'use client' */}
        {/* Example: */}
        {/* <CommentsClient postId={post.id} /> */}
        <div id="comments-root">
          {/* Comments client component mounts here */}
        </div>
      </section>
    </div>
  );
}
