import { Icon } from '@iconify/react';
import * as React from 'react';

import { NextImageFill, SectionWrapper } from '@/components/elements';

import { HpoImage, OptimapImage, SthImage } from '@/utils/constants/imageCloud';

interface ICardProps {
  title: string;
  subTitle: string;
  iconCard?: string;
  logo?: string;
}

const CareerBook = () => {
  const Card = ({
    title,
    subTitle,
    iconCard: IconCard = 'tabler:books',
    logo,
  }: ICardProps) => {
    return (
      <div className='group relative flex w-full flex-col gap-2 overflow-hidden rounded border-[1px] border-primary-300 bg-white p-4 dark:border-primary-600 dark:bg-dark'>
        <div className='to-dark-600 absolute inset-0 translate-y-[100%] bg-gradient-to-r from-primary-600 transition-transform duration-300 group-hover:translate-y-[0%]' />
        <Icon
          icon={IconCard}
          className='absolute -right-10 -top-12 text-9xl text-primary-400 transition-all duration-300 group-hover:rotate-12 group-hover:text-gray-700'
        />
        <NextImageFill
          src={logo ?? ''}
          alt='Image'
          figureClassName='w-8 aspect-square'
        />
        <div>
          <h3 className='h4 text-response-md relative text-primary-600 duration-300 group-hover:text-white'>
            {title}
          </h3>
          <p className='relative text-slate-400 duration-300 group-hover:text-violet-200'>
            {subTitle}
          </p>
        </div>
      </div>
    );
  };
  return (
    <SectionWrapper title='Career' subTitle='My professional career journey.'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <Card
          title='PT. Optima Media Teknologi'
          subTitle='Frontend Web developer'
          iconCard='tabler:send'
          logo={OptimapImage}
        />
        <Card
          title='HPO.NET'
          subTitle='Freelancer Web Developer'
          iconCard='ph:android-logo-bold'
          logo={HpoImage}
        />
        <Card
          title='PT. Wira Usahatama Lestari'
          subTitle='Administarator'
          iconCard='pajamas:work'
          logo={SthImage}
        />
      </div>
    </SectionWrapper>
  );
};

export default CareerBook;
