'use client';

import { Icon } from '@iconify/react';
import * as React from 'react';

import { Divider } from '@/components/elements';

interface ISectionWrapperProps {
  children: React.ReactNode;
  title: string;
  subTitle: string;
  icon?: string;
}

const SectionWrapper: React.FC<ISectionWrapperProps> = ({
  children,
  subTitle,
  title,
  icon = 'tabler:books',
}) => {
  return (
    <div className='flex w-full flex-col'>
      <div className='flex flex-col gap-1'>
        <div className='flex flex-row items-center gap-2'>
          <Icon
            icon={icon}
            className='text-2xl text-gray-600 dark:text-darkText'
          />
          <h1 className='h4 text-primary-700'>{title}</h1>
        </div>
        <span className='text-response-sm font-normal text-primary-600 dark:text-darkText'>
          {subTitle}
        </span>
      </div>
      <div className='py-6'>{children}</div>
      <Divider className='border-t-2' />
    </div>
  );
};

export default SectionWrapper;
