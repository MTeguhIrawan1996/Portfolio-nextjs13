'use client';

import { Icon } from '@iconify/react';
import * as React from 'react';

import { NextImageFill } from '@/components/elements';

import clsxm from '@/utils/lib/clsxm';

interface ICardProps {
  title: string;
  subTitle: string;
  date: string;
  iconCard?: string;
  logo?: string;
}

const Card: React.FC<ICardProps> = ({
  title,
  subTitle,
  iconCard: IconCard = 'tabler:books',
  logo,
  date,
}) => {
  return (
    <div
      className={clsxm(
        'group relative flex w-full flex-col gap-2 overflow-hidden rounded bg-white p-4 ring-[1px] ring-inset ring-primary-300 dark:bg-dark dark:ring-primary-500',
        'hover:shadow-md hover:shadow-primary-600',
        'transition-all duration-300'
      )}
    >
      <div className='absolute inset-0 translate-y-[100%] bg-gradient-to-r from-primary-600 to-dark transition-transform duration-300 group-hover:translate-y-[0%]' />
      <Icon
        icon={IconCard}
        className='absolute -right-10 -top-12 text-9xl text-primary-400 transition-all duration-300 group-hover:rotate-12 group-hover:text-primary-500'
      />
      <NextImageFill
        src={logo ?? ''}
        alt={title}
        priority={true}
        figureClassName='w-8 aspect-square'
        loading='eager'
      />
      <div className='z-10 pt-6'>
        <h3 className='text-response-base text-primary-600 duration-300 group-hover:text-white dark:text-darkText'>
          {title}
        </h3>
        <p className='text-response-sm font-normal text-primary-400 duration-300 group-hover:text-white dark:text-primary-400'>
          {subTitle}
        </p>
      </div>
      <h4 className='z-10 text-[12px] font-light text-primary-400 duration-300 group-hover:text-white dark:text-primary-400'>
        {date}
      </h4>
    </div>
  );
};

export default Card;
