'use client';

import Image, { ImageProps } from 'next/image';
import * as React from 'react';

import clsxm from '@/utils/lib/clsxm';

interface INextImageFillProps extends ImageProps {
  figureClassName: string;
  imageClassName?: string;
}

export default function NextImageFill({
  src,
  alt,
  imageClassName,
  figureClassName,
  quality = 100,
  placeholder = 'empty',
  loading = 'lazy',
  ...rest
}: INextImageFillProps) {
  const [isLoading, setLoading] = React.useState(true);

  return (
    <figure
      className={clsxm(
        'relative',
        isLoading && 'animate-pulse bg-gray-200',
        figureClassName
      )}
    >
      <Image
        src={src}
        quality={quality}
        alt={alt}
        fill
        className={clsxm(
          'bg-center object-cover',
          'duration-700 ease-in-out',
          isLoading
            ? 'scale-105 blur-xl grayscale'
            : 'scale-100 blur-0 grayscale-0',
          imageClassName
        )}
        placeholder={placeholder}
        sizes='(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw'
        loading={loading}
        onLoadingComplete={() => setLoading(false)}
        {...rest}
      />
    </figure>
  );
}
