// src/lib/api.js
const BASE = 'https://jsonplaceholder.typicode.com';

export const getPosts = () => fetch(`${BASE}/posts`).then(r => r.json());
export const getPostById = (id) => fetch(`${BASE}/posts/${id}`).then(r => r.json());
export const getCommentsForPost = (postId) =>
  fetch(`${BASE}/posts/${postId}/comments`).then(r => r.json());
export const getUsers = () => fetch(`${BASE}/users`).then(r => r.json());

export const addComment = async ({ postId, name, email, body }) => {
    
  const res = await fetch(`${BASE}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ postId, name, email, body }),
  });
  if (!res.ok) throw new Error('Failed to add comment');
  return res.json();
};
