'use client';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import React from 'react';

import { NextImageFill } from '@/components/elements';
import Ribbon from '@/components/elements/global/Ribbon';

import { BlogResponse } from '@/service/useReadBlogAll';
import { ExampleBlog } from '@/utils/constants/imageCloud';

type Props = {
  data: BlogResponse[];
};

export default function BlogsCard({ data }: Props) {
  const router = useRouter();

  return (
    <div className='mx-auto grid grid-cols-1 gap-6 p-4 md:grid-cols-2'>
      {data?.map((val, i) => (
        <button
          className='glass-bg card glass w-full shadow-lg md:transition-transform md:duration-200 md:hover:scale-105'
          key={`${val.id}`}
          onClick={() => router.push(`/blogs/${val.slug}`)}
        >
          <div className='relative z-10 w-full overflow-hidden rounded-2xl'>
            <div className='aspect-video min-h-52 w-full'>
              <NextImageFill
                src={val.social_image || ExampleBlog}
                alt={val.title}
                figureClassName='h-full w-full'
                imageClassName='object-fill'
              />
            </div>
            <div className='card-body items-start justify-start gap-4 px-4 py-4'>
              <div className='flex flex-col gap-1'>
                <h2 className='text-response-base text-left leading-tight text-primary'>
                  {val.title}
                </h2>
                <span className='text-left text-xs font-normal text-secondary'>
                  {dayjs(val.published_at).format('MMM D, YYYY')}
                </span>
              </div>
              <p className='text-response-sm text-left font-normal text-secondary'>
                {val.description}
              </p>
            </div>
          </div>
          {i === 0 && <Ribbon text='New' />}
        </button>
      ))}
    </div>
  );
}
