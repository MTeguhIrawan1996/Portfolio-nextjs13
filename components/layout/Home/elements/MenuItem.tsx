'use client';

import { usePathname } from 'next/navigation';
import * as React from 'react';

import { PrimaryLink } from '@/components/elements';

import clsxm from '@/utils/lib/clsxm';

interface IMenuItemProps {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const MenuItem: React.FC<IMenuItemProps> = ({ label, icon: Icon, href }) => {
  const pathname = usePathname();

  return (
    <PrimaryLink
      href={href}
      className={clsxm(
        'flex w-full cursor-pointer items-center gap-2 rounded-lg px-4 py-2',
        href === pathname
          ? 'bg-primary-100 text-primary-900 dark:bg-primary-800 dark:!text-primary-300'
          : 'lg:transition-all lg:duration-300 lg:hover:scale-105 lg:hover:gap-3 hover:lg:rounded-lg hover:lg:bg-primary-100 hover:dark:lg:bg-primary-800'
      )}
    >
      {Icon}
      <span className='text-gray-600 dark:text-darkText'>{label}</span>
    </PrimaryLink>
  );
};

export default MenuItem;
