import * as React from 'react';

import CareerBook from '@/components/features/home/common/section/CareerBook';
import Header from '@/components/features/home/common/section/Header';
import Skills from '@/components/features/home/common/section/SkillsBook';

const HomePage = () => {
  return (
    <>
      <Header />
      {/* <LastArticlesBook /> */}
      <CareerBook />
      <Skills />
    </>
  );
};

export default HomePage;
