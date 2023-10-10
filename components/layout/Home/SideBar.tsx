import * as React from 'react';

import { Divider } from '@/components/elements';
import MenuItem from '@/components/layout/Home/elements/MenuItem';
import ProfilHeader from '@/components/layout/Home/elements/ProfilHeader';

import clsxm from '@/utils/lib/clsxm';

const SideBar = () => {
  return (
    <div
      className={clsxm(
        'hide-scrollbar w-full',
        'lg:sticky lg:top-0 lg:h-[calc(100vh-32px)]  lg:w-[300px] lg:overflow-y-scroll lg:px-6 lg:pt-6'
      )}
    >
      <div className='flex flex-col items-center justify-start gap-4'>
        <ProfilHeader />
        <nav className='w-full'>
          <Divider className='border-t-2' />
          <div className='flex flex-col items-start justify-start gap-2'>
            <MenuItem label='Home' />
            <MenuItem label='Home' />
            <MenuItem label='Home' />
            <MenuItem label='Home' />
            <MenuItem label='Home' />
          </div>
          <Divider className='border-t-2' />
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
