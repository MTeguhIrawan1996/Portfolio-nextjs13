'use client';

import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import * as React from 'react';

import { NextImageFill, SectionWrapper } from '@/components/elements';
import Ribbon from '@/components/elements/global/Ribbon';
import CardBlogSkeleton from '@/components/features/blogs/common/elements/CardBlogSkeleton';

import { useReadAllBlog } from '@/service/useReadBlogAll';
import { ExampleBlog } from '@/utils/constants/imageCloud';

const BlogList = () => {
  const router = useRouter();
  const { data, isLoading } = useReadAllBlog();
  return (
    <SectionWrapper
      title='Blogs'
      subTitle='Exploring the world of code, creativity, and constant learning.'
      icon='tabler:edit-circle'
    >
      <div className='mx-auto grid w-[95%] grid-cols-1 gap-6 p-4 md:grid-cols-2'>
        {isLoading
          ? [...Array(4)].map((_, i) => <CardBlogSkeleton key={i} />)
          : data?.map((val, i) => (
              <button
                className='card glass w-full bg-gray-600 shadow-md md:transition-transform md:duration-200 md:hover:scale-105'
                key={`${val.id}`}
                onClick={() => router.push(`/blogs/${val.slug}`)}
              >
                <div className='relative z-10 overflow-hidden rounded-2xl'>
                  <div className='h-52 w-full'>
                    <NextImageFill
                      src={val.social_image || ExampleBlog}
                      alt='car!'
                      figureClassName='h-full w-full'
                    />
                  </div>
                  <div className='card-body !items-start !justify-start gap-4'>
                    <div className='flex flex-col gap-1'>
                      <h2 className='card-title !mb-0 text-gray-300'>
                        {val.title}
                      </h2>
                      <span className='text-xs text-gray-300'>
                        {dayjs(val.published_at).format('MMM D, YYYY')}
                      </span>
                    </div>
                    <p className='text-response-sm text-left font-normal text-gray-300'>
                      {val.description}
                    </p>
                  </div>
                </div>
                {i === 0 && <Ribbon text='New' />}
              </button>
            ))}
      </div>
    </SectionWrapper>
  );
};

export default BlogList;
