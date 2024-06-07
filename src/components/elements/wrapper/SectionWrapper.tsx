'use client';

import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import * as React from 'react';

import { Divider } from '@/components/elements';

import clsxm from '@/utils/lib/clsxm';

interface ISectionWrapperProps {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
  className?: string;
  icon?: string;
  withDivider?: boolean;
  otherContent?: () => React.ReactNode;
  isLoading?: boolean;
  enableBack?: boolean;
}

const SectionWrapper: React.FC<ISectionWrapperProps> = ({
  children,
  subTitle,
  title,
  icon,
  withDivider = false,
  otherContent,
  className = 'py-6',
  isLoading,
  enableBack,
}) => {
  const router = useRouter();
  return (
    <section className='flex w-full flex-col items-start'>
      {enableBack && (
        <button
          className='btn btn-xs mb-3 text-xs text-primary'
          onClick={() => router.back()}
        >
          <Icon
            icon='tabler:arrow-back-up'
            className='text-base text-primary'
          />
          Back
        </button>
      )}
      <div className='flex w-full flex-col gap-1'>
        <div className='flex flex-row items-center gap-2'>
          {isLoading ? (
            <>
              <div className='skeleton aspect-square h-8' />
              <div className='skeleton h-8 w-40' />
            </>
          ) : (
            <>
              {icon && <Icon icon={icon} className='text-2xl text-primary' />}
              <h1 className='h4 text-primary'>{title}</h1>
            </>
          )}
        </div>
        {isLoading ? (
          <div className='skeleton h-4 w-80' />
        ) : (
          subTitle && (
            <span className='text-response-sm font-normal text-secondary'>
              {subTitle}
            </span>
          )
        )}
        {otherContent && otherContent()}
      </div>
      <div className={clsxm('w-full', className)}>{children}</div>
      {withDivider && <Divider className='my-1 w-full border-t-2' />}
    </section>
  );
};

export default SectionWrapper;
