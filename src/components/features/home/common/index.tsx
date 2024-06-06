import * as React from 'react';

import { Header } from '@/components/elements';
import LastArticlesSkeleton from '@/components/features/home/common/elements/LastArticlesSkeleton';
import CareerBook from '@/components/features/home/common/section/CareerBook';
import LastArticlesBook from '@/components/features/home/common/section/LastArticlesBook';
import Skills from '@/components/features/home/common/section/SkillsBook';

const HomePage = () => {
  return (
    <>
      <Header withAbout />
      <React.Suspense fallback={<LastArticlesSkeleton />}>
        <LastArticlesBook />
      </React.Suspense>
      <CareerBook />
      <Skills />
    </>
  );
};

export default HomePage;
