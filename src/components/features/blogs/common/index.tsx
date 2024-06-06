import * as React from 'react';

import { Header } from '@/components/elements';
import CardBlogSkeleton from '@/components/features/blogs/common/elements/CardBlogSkeleton';
import BlogList from '@/components/features/blogs/common/section/BlogList';

const BlogsPage = () => {
  return (
    <>
      <Header />
      <React.Suspense fallback={<CardBlogSkeleton />}>
        <BlogList />
      </React.Suspense>
    </>
  );
};

export default BlogsPage;
