'use client';

import { Icon } from '@iconify/react';
import * as React from 'react';

import clsxm from '@/utils/lib/clsxm';

interface IMenuItemProps {
  label: string;
}

const MenuItem: React.FC<IMenuItemProps> = ({ label }) => {
  const isTrue = false;
  return (
    <div
      className={clsxm(
        'flex w-full cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-primary-700 hover:text-primary-900 dark:text-primary-400 hover:dark:text-primary-300',
        isTrue
          ? 'bg-primary-100 text-primary-900 dark:bg-primary-800 dark:!text-primary-300'
          : 'lg:transition-all lg:duration-300 lg:hover:scale-105 lg:hover:gap-3 hover:lg:rounded-lg hover:lg:bg-primary-100 hover:dark:lg:bg-primary-800'
      )}
    >
      <Icon icon='ic:baseline-verified' className='flex-none' />
      <span>{label}</span>
    </div>
  );
};

export default MenuItem;
