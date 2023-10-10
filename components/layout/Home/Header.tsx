'use client';

import { IconBookmarkEdit } from '@tabler/icons-react';
import * as React from 'react';

import { Divider } from '@/components/elements';

import { OptimapSvg } from '@/utils/constants/svg';
import clsxm from '@/utils/lib/clsxm';

export default function Header() {
  return (
    <div className='flex flex-col gap-4 pb-4'>
      <div className='flex gap-2 text-2xl font-medium lg:text-3xl'>
        <h1 className='h2 text-gray-700'>Hi, I&apos;m Irawan</h1>{' '}
        <div className='ml-1 animate-waving-hand'>👋</div>
      </div>
      <div className='flex flex-row gap-4'>
        <div
          className={clsxm(
            'group relative flex cursor-pointer flex-row items-center justify-center gap-2 ',
            'before:aspect-square before:h-2 before:rounded-full before:bg-gray-400 before:content-[""]'
          )}
        >
          <OptimapSvg className='text-lg' />
          <span className='text-response-sm font-normal text-gray-600 dark:text-darkText'>
            Frontend Web Developer
          </span>
          <span className='absolute left-0 top-8 scale-0 rounded bg-neutral-500 p-2 text-xs font-normal text-white transition-all delay-0 duration-300 group-hover:scale-100 dark:text-darkText'>
            PT Optima Media Teknologi
          </span>
        </div>
        <div className='group relative flex cursor-pointer flex-row items-center justify-center gap-2 before:aspect-square before:h-2 before:rounded-full before:bg-gray-400 before:content-[""]'>
          <IconBookmarkEdit className='aspect-square h-5 text-gray-600 dark:text-darkText' />
          <span className='text-response-sm font-normal text-gray-600 dark:text-darkText'>
            View Resume
          </span>
        </div>
      </div>
      <article className='prose-p:text-response-sm prose max-w-none prose-p:my-2 prose-p:font-normal prose-p:leading-normal prose-p:text-gray-500 prose-p:dark:text-darkText'>
        <p className='first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:font-bold first-letter:text-gray-700 dark:first-letter:text-darkText'>
          Halo, Saya seorang Pengembang Web yang berspesialisasi dalam
          Pengembangan Frontend. Saya juga memiliki pengetahuan dasar tentang
          Pengembangan Backend menggunakan Laravel dan ExpressJs. Perjalanan
          saya memasuki dunia pengembangan web dimulai pada tahun 2019. Saya
          sangat tertarik dengan teknologi modern seperti NextJs, TailwindCss,
          dan Mantine UI.
        </p>{' '}
        <p>
          Saya telah mengasah keterampilan saya melalui pembelajaran mandiri,
          memanfaatkan sumber daya online seperti YouTube, dan berpartisipasi
          dalam berbagai kursus online. Hal ini memberi saya pemahaman mendalam
          tentang konsep dan praktik terbaik dalam industri pengembangan web.
        </p>{' '}
        <p>
          Saya sangat yakin bahwa teknologi adalah kunci untuk menciptakan
          pengalaman online yang luar biasa, dan saya bersemangat untuk terus
          berkontribusi dalam penciptaan solusi web yang menarik dan fungsional.
        </p>
      </article>
      <Divider className='border-t-2' />
    </div>
  );
}
