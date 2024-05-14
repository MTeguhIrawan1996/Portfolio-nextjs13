import * as React from 'react';

import BlogDetailContent from '@/components/features/blogs/detail/section/BlogDetailContent';

import { BlogDetailProps } from '@/types/global';

interface IBlogDetailContentProps {
  content: BlogDetailProps;
  pageViewCount: number;
}

const BlogDetailPage = ({
  content,
  pageViewCount,
}: IBlogDetailContentProps) => {
  return <BlogDetailContent content={content} pageViewCount={pageViewCount} />;
};

export default BlogDetailPage;
