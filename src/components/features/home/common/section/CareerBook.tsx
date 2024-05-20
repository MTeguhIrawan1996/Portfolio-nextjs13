'use client';
import * as React from 'react';

import { SectionWrapper } from '@/components/elements';
import CareerCard from '@/components/features/home/common/elements/CareerCard';
import CareerSkeleton from '@/components/features/home/common/elements/CareerSkeleton';

import { useReadAllCareer } from '@/service/useReadAllCareer';

const CareerBook = () => {
  const { data, isLoading } = useReadAllCareer();
  return (
    <SectionWrapper
      title='Career'
      subTitle='My professional career journey.'
      icon='pajamas:work'
      withDivider
    >
      <div className='grid grid-cols-1 gap-4 p-2 md:grid-cols-2'>
        {isLoading
          ? [...Array(4)].map((_, i) => <CareerSkeleton key={i} />)
          : data?.map(
              (
                {
                  company,
                  companyLogo,
                  iconifyClass,
                  position,
                  startDate,
                  endDate,
                },
                i
              ) => (
                <CareerCard
                  title={company}
                  subTitle={position}
                  iconCard={iconifyClass}
                  logo={companyLogo}
                  startDate={startDate}
                  endDate={endDate}
                  key={i}
                />
              )
            )}
      </div>
    </SectionWrapper>
  );
};

export default CareerBook;
