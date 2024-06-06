'use client';

import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { NextImageFill } from '@/components/elements';
import Ribbon from '@/components/elements/global/Ribbon';

import { BlogResponse } from '@/service/useReadBlogAll';
import clsxm from '@/utils/lib/clsxm';

type Props = {
  data: BlogResponse[];
};

export default function LastArticlesCard({ data }: Props) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView='auto'
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className='mySwiper !py-4'
    >
      {data?.map((item, i) => (
        <SwiperSlide className='!relative !h-52 !w-80' key={`${i}-${item.id}`}>
          <Link href={`/blogs/${item.slug}`}>
            <div
              className={clsxm(
                'relative bg-base-100 shadow-xl transition hover:scale-95 hover:duration-500',
                'h-full w-full'
              )}
            >
              <NextImageFill
                src={item.social_image}
                alt={item.title}
                figureClassName='h-full w-full relative z-10 overflow-hidden rounded-xl'
                imageClassName='object-fill'
                quality={75}
                priority={true}
                loading='eager'
              />
              <div className='absolute inset-0 z-10 rounded-xl bg-black/50 opacity-70' />
              <div className='absolute inset-x-0 bottom-0 z-10 p-4'>
                <h2 className='text-response-sm truncate font-bold text-gray-200'>
                  {item.title}
                </h2>
                <p className='mt-1 text-xs text-gray-200'>
                  {dayjs(item.published_at).format('MMM D, YYYY')}
                </p>
              </div>
              {i === 0 && <Ribbon text='New' />}
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
