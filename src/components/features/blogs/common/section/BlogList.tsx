'use client';

import * as React from 'react';

import { NextImageFill, SectionWrapper } from '@/components/elements';

import { ExampleBlog, ExampleBlog2 } from '@/utils/constants/imageCloud';

const BlogList = () => {
  return (
    <SectionWrapper
      title='Blogs'
      subTitle='Exploring the world of code, creativity, and constant learning.'
      icon='mdi:star-box-multiple-outline'
    >
      <div className='mx-auto grid w-[95%] grid-cols-1 gap-6 p-4 md:grid-cols-2'>
        <div className='card glass relative w-full overflow-hidden bg-gray-600 shadow-md md:transition-transform md:duration-200 md:hover:scale-105'>
          <div className='h-52 w-full'>
            <NextImageFill
              src={ExampleBlog}
              alt='car!'
              figureClassName='h-full w-full'
            />
          </div>
          <div className='card-body'>
            <h2 className='card-title text-gray-300'>Next.js 🌌</h2>
            <p className='text-gray-300'>Welcome to the Next.js Learning!</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary btn-sm'>Learn now!</button>
            </div>
          </div>
        </div>
        <div className='card glass relative w-full overflow-hidden bg-gray-600 shadow-md md:transition-transform md:duration-200 md:hover:scale-105'>
          <div className='h-52 w-full'>
            <NextImageFill
              src={ExampleBlog2}
              alt='car!'
              figureClassName='h-full w-full'
            />
          </div>
          <div className='card-body'>
            <h2 className='card-title text-gray-300'>Next.js Rendering 🌏</h2>
            <p className='text-gray-300'>What is NextJs Rendering</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary btn-sm'>Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BlogList;
