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
  const cleanedPath = pathname.split('/').slice(0, 2).join('/');

  return (
    <PrimaryLink
      href={href}
      className={clsxm(
        'flex w-full cursor-pointer items-center gap-2 rounded-lg px-4 py-2',
        href === cleanedPath
          ? 'sidebar'
          : 'hover:bg-accent lg:transition-all lg:duration-300 lg:hover:scale-105 lg:hover:gap-3 hover:lg:rounded-lg'
      )}
    >
      {Icon}
      <span className='text-secondary'>{label}</span>
    </PrimaryLink>
  );
};

export default MenuItem;
