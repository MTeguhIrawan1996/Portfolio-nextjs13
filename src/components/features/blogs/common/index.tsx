import * as React from 'react';

import { Header } from '@/components/elements';
import BlogList from '@/components/features/blogs/common/section/BlogList';

const BlogsPage = () => {
  return (
    <>
      <Header />
      <BlogList />
    </>
  );
};

export default BlogsPage;
