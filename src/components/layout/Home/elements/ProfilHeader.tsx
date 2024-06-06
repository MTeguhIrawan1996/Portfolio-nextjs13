'use client';

import { Icon } from '@iconify/react';
import * as React from 'react';

import { NextImageFill, Status, ToggleThemeIcon } from '@/components/elements';

import { BackdropImage, ProfilImage } from '@/utils/constants/imageCloud';
import useHasMounted from '@/utils/hooks/useHasMounted';
import clsxm from '@/utils/lib/clsxm';

const ProfilHeader = () => {
  const mounted = useHasMounted();

  return (
    <div className='flex w-full flex-col items-center justify-between space-y-4'>
      <div className='relative flex h-24 w-full items-center justify-center'>
        <Status />
        <NextImageFill
          alt='backdrop-image'
          src={BackdropImage}
          figureClassName='h-full w-full rounded-lg overflow-hidden brightness-base'
          imageClassName='scale-125'
          quality={75}
          priority
          loading='eager'
        />
        <NextImageFill
          figureClassName={clsxm(
            'absolute z-10 border-2 border-base-100 aspect-square overflow-hidden h-24 translate-y-1/2 rounded-full shadow-md transition-all duration-700 delay-0',
            !mounted && 'h-16 aspect-square'
          )}
          imageClassName='scale-105 hover:scale-110'
          alt='profil-image'
          src={ProfilImage}
          quality={20}
        />
        <div className='absolute bottom-1 right-1 overflow-hidden rounded-lg'>
          <ToggleThemeIcon />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-1 pt-12'>
        <div className='flex flex-row items-center justify-center gap-2'>
          <h2 className='h4 text-primary'>M Teguh Irawan</h2>
          <Icon icon='ic:baseline-verified' className='text-lg text-blue-500' />
        </div>

        <span className='text-response-sm font-normal text-secondary'>
          @onedev
        </span>
      </div>
    </div>
  );
};

export default ProfilHeader;
