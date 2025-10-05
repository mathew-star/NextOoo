'use client';

import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/lib/api';
import PostCard from '@/components/posts/PostCard';
import PostSkeleton from '@/components/ui/PostSkeleton';

export default function PostsClient() {
  const { data: posts } = useQuery({ queryKey: ['posts'], queryFn: getPosts });

  return (
    <section className="space-y-4">
      {posts?.map(p => <PostCard key={p.id} post={p} />)}
    </section>
  );
}
