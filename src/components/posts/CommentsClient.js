'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getCommentsForPost, addComment } from '@/components/lib/api';
import { useState } from 'react';

export default function CommentsClient({ postId }) {
  const qc = useQueryClient();
  const { data: comments } = useQuery(['comments', postId], () => getCommentsForPost(postId));
  const [form, setForm] = useState({ name: '', email: '', body: '' });

  const mut = useMutation(addComment, {
    // optimistic update: immediately add to UI
    onMutate: async (newComment) => {
      await qc.cancelQueries(['comments', postId]);
      const previous = qc.getQueryData(['comments', postId]) || [];
      const optimistic = [{ ...newComment, id: Math.random()*-1 }, ...previous];
      qc.setQueryData(['comments', postId], optimistic);
      return { previous };
    },
    onError: (err, newComment, context) => {
      qc.setQueryData(['comments', postId], context.previous);
    },
    onSettled: () => {
      qc.invalidateQueries(['comments', postId]);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mut.mutate({ postId, ...form });
    setForm({ name: '', email: '', body: '' });
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Comments ({comments?.length ?? 0})</h3>

      <form onSubmit={handleSubmit} className="space-y-2 mb-4">
        <input value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} placeholder="Name" className="w-full p-2 border rounded" required />
        <input value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} placeholder="Email" className="w-full p-2 border rounded" required />
        <textarea value={form.body} onChange={(e)=>setForm({...form, body: e.target.value})} placeholder="Comment" className="w-full p-2 border rounded" required />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Add comment</button>
      </form>

      <ul className="space-y-3">
        {comments?.map(c => (
          <li key={c.id} className="border rounded p-3">
            <div className="text-sm font-semibold">{c.name} <span className="text-xs text-slate-500">({c.email})</span></div>
            <p className="text-sm text-slate-700 dark:text-slate-300">{c.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
