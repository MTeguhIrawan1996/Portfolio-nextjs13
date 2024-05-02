import * as React from 'react';

import { Header } from '@/components/elements';
import CareerBook from '@/components/features/home/common/section/CareerBook';
import Skills from '@/components/features/home/common/section/SkillsBook';

const HomePage = () => {
  return (
    <>
      <Header withAbout />
      {/* <LastArticlesBook /> */}
      <CareerBook />
      <Skills />
    </>
  );
};

export default HomePage;