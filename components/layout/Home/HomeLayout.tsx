import * as React from 'react';

import Header from '@/components/layout/Home/Header';
import SideBar from '@/components/layout/Home/SideBar';

interface LayoutsProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: LayoutsProps) {
  return (
    <div className='relative flex'>
      <div className='container relative mx-auto flex w-full flex-row justify-between gap-4 px-20 py-4'>
        <main className='hide-scrollbar h-[calc(100vh-32px)] flex-1 overflow-y-scroll pt-6'>
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
