import * as React from 'react';

import { SectionWrapper } from '@/components/elements';
import BlogsCard from '@/components/features/blogs/common/elements/BlogsCard';

import { readAllBlogServer } from '@/service/useReadBlogAll';

export default async function BlogList() {
  const data = await readAllBlogServer();
  return (
    <SectionWrapper
      title='Blogs'
      subTitle='Exploring the world of code, creativity, and constant learning.'
      icon='tabler:edit-circle'
    >
      <BlogsCard data={data} />
    </SectionWrapper>
  );
}
