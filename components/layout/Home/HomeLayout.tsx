import * as React from 'react';

import Header from '@/components/layout/Home/Header';
import SideBar from '@/components/layout/Home/SideBar';

import clsxm from '@/utils/lib/clsxm';

interface LayoutsProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: LayoutsProps) {
  return (
    <div className='relative scroll-smooth transition-all duration-300'>
      <div
        className={clsxm(
          'container relative mx-auto flex w-full flex-col-reverse justify-start gap-4 px-10 py-4',
          'lg:flex-row lg:justify-between lg:px-20'
        )}
      >
        <main
          className={clsxm(
            'hide-scrollbar w-full lg:h-[calc(100vh-32px)] lg:flex-1 lg:overflow-y-scroll lg:pt-6'
          )}
        >
          <div className='h-screen'>
            <Header />
            {children}
          </div>
        </main>
        <SideBar />
      </div>
    </div>
  );
}
