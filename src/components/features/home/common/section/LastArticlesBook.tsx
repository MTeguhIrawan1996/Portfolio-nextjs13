import * as React from 'react';

import { SectionWrapper } from '@/components/elements';
import LastArticlesCard from '@/components/features/home/common/elements/LastArticlesCard';

import { readAllBlogServer } from '@/service/useReadBlogAll';

export const revalidate = 3600;

export default async function LastArticlesBook() {
  const data = await readAllBlogServer();

  return (
    <SectionWrapper
      className='py-2'
      title='Articles'
      subTitle='Last articles'
      icon='tabler:edit-circle'
      withDivider
    >
      <LastArticlesCard data={data} />
    </SectionWrapper>
  );
}
