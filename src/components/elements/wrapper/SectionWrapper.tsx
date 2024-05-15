'use client';

import { Icon } from '@iconify/react';
import * as React from 'react';

import { Divider } from '@/components/elements';

interface ISectionWrapperProps {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
  className?: string;
  icon?: string;
  withDivider?: boolean;
  otherContent?: () => React.ReactNode;
}

const SectionWrapper: React.FC<ISectionWrapperProps> = ({
  children,
  subTitle,
  title,
  icon,
  withDivider = false,
  otherContent,
  className = 'py-6',
}) => {
  return (
    <section className='flex w-full flex-col'>
      <div className='flex flex-col gap-1'>
        <div className='flex flex-row items-center gap-2'>
          {icon && <Icon icon={icon} className='text-2xl text-primary' />}
          <h1 className='h4 text-primary'>{title}</h1>
        </div>
        {subTitle && (
          <span className='text-response-sm font-normal text-secondary'>
            {subTitle}
          </span>
        )}
        {otherContent && otherContent()}
      </div>
      <div className={className}>{children}</div>
      {withDivider && <Divider className='my-1 border-t-2' />}
    </section>
  );
};

export default SectionWrapper;
