'use client';

import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { NextImageFill } from '@/components/elements';
import Ribbon from '@/components/elements/global/Ribbon';

import { BlogResponse } from '@/service/useReadBlogAll';
import clsxm from '@/utils/lib/clsxm';

type Props = {
  data: BlogResponse[];
};

export default function LastArticlesCard({ data }: Props) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {data?.map((item, i) => (
          <div className='h-52 px-2 py-2' key={`${i}-${item.id}`}>
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
                <div className='absolute inset-0 z-10 overflow-hidden rounded-xl bg-black/50 opacity-70' />
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
          </div>
        ))}
      </Slider>
    </div>
  );
}
