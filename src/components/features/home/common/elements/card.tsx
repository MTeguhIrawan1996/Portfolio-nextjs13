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
        'group relative flex w-full flex-col gap-2 overflow-hidden rounded p-4 ring-[1px] ring-inset ring-secondary',
        'hover:shadow-md hover:shadow-secondary',
        'transition-all duration-300'
      )}
    >
      <div className='absolute inset-0 translate-y-[100%] bg-gradient-to-r from-accent to-primary transition-transform duration-300 group-hover:translate-y-[0%]' />
      <Icon
        icon={IconCard}
        className='absolute -right-10 -top-12 text-9xl text-primary transition-all duration-200 group-hover:rotate-12 group-hover:text-accent'
      />
      <NextImageFill
        src={logo ?? ''}
        alt={title}
        priority={true}
        figureClassName='w-8 aspect-square'
        loading='eager'
      />
      <div className='z-10 pt-6'>
        <h3 className='text-response-base text-primary duration-200 group-hover:text-secondary'>
          {title}
        </h3>
        <p className='text-response-sm font-normal text-primary duration-200 group-hover:text-secondary'>
          {subTitle}
        </p>
      </div>
      <h4 className='z-10 text-[12px] font-light text-primary duration-200 group-hover:text-secondary'>
        {date}
      </h4>
    </div>
  );
};

export default Card;
