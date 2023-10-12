'use client';

import * as React from 'react';

import CareerBook from '@/components/features/home/common/section/CareerBook';
import Header from '@/components/features/home/common/section/Header';
import LastArticlesBook from '@/components/features/home/common/section/LastArticlesBook';

const HomePage = () => {
  return (
    <>
      <Header />
      <LastArticlesBook />
      <CareerBook />
    </>
  );
};

export default HomePage;
