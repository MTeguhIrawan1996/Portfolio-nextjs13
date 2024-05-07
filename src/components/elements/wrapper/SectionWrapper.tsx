'use client';

import { Icon } from '@iconify/react';
import * as React from 'react';

import { Divider } from '@/components/elements';

interface ISectionWrapperProps {
  children: React.ReactNode;
  title: string;
  subTitle: string;
  icon?: string;
  withDivider?: boolean;
}

const SectionWrapper: React.FC<ISectionWrapperProps> = ({
  children,
  subTitle,
  title,
  icon = 'tabler:books',
  withDivider = false,
}) => {
  return (
    <div className='flex w-full flex-col'>
      <div className='flex flex-col gap-1'>
        <div className='flex flex-row items-center gap-2'>
          <Icon icon={icon} className='text-2xl text-primary' />
          <h1 className='h4 text-primary'>{title}</h1>
        </div>
        <span className='text-response-sm font-normal text-secondary'>
          {subTitle}
        </span>
      </div>
      <div className='py-6'>{children}</div>
      {withDivider && <Divider className='my-1 border-t-2' />}
    </div>
  );
};

export default SectionWrapper;
