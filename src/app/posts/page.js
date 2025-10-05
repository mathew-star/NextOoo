// src/app/posts/page.js
import React, { Suspense } from 'react';
import PostsClient from '@/components/posts/PostsClient';
import PostSkeleton from '@/components/ui/PostSkeleton';
import ErrorBoundary from '@/components/ui/ErrorBoundary';

export default function PostsPage() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PostSkeleton />}>
        <PostsClient />
      </Suspense>
    </ErrorBoundary>
  );
}
