'use client';

import * as React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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
            'hide-scrollbar h-full w-full lg:h-[calc(100vh-32px)] lg:flex-1 lg:overflow-y-scroll lg:pt-6'
          )}
        >
          <div className='flex h-full flex-col items-start justify-start gap-4 lg:h-screen'>
            {children}
          </div>
        </main>
        <SideBar />
        <ToastContainer />
      </div>
    </div>
  );
}
