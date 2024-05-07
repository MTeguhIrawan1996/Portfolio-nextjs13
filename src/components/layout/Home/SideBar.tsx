import * as React from 'react';

import { Divider } from '@/components/elements';
import MenuItem from '@/components/layout/Home/elements/MenuItem';
import ProfilHeader from '@/components/layout/Home/elements/ProfilHeader';

import { links } from '@/utils/constants/links/links';
import clsxm from '@/utils/lib/clsxm';

const SideBar = () => {
  return (
    <div
      className={clsxm(
        'hide-scrollbar w-full',
        'lg:sticky lg:top-0 lg:h-[calc(100vh-32px)] lg:w-[300px] lg:overflow-y-scroll lg:px-6 lg:pt-6'
      )}
    >
      <div className='flex flex-col items-center justify-start gap-4'>
        <ProfilHeader />
        <nav className='w-full'>
          <Divider className='border-t-2' />
          <div className='flex flex-col items-start justify-start gap-2'>
            {links.map((value, i) => (
              <MenuItem {...value} key={i} />
            ))}
          </div>
          <Divider className='border-t-2' />
          <div className='text-response-sm text-primary-600 dark:text-darkText hidden flex-row items-center justify-center gap-1 font-normal lg:flex'>
            <span>© {new Date().getFullYear()}</span>
            <span className='animate-pulse text-red-500'>💥</span>
            <span>by</span>
            <span className='cursor-pointer hover:dark:text-neutral-400'>
              onedev
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
