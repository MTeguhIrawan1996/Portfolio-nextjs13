import * as React from 'react';

import BlogDetailContent from '@/components/features/blogs/detail/section/BlogDetailContent';

import { BlogDetailProps } from '@/types/global';

interface IBlogDetailContentProps {
  content: BlogDetailProps;
}

const BlogDetailPage = ({ content }: IBlogDetailContentProps) => {
  return <BlogDetailContent content={content} />;
};

export default BlogDetailPage;
