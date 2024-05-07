'use client';
import { Icon } from '@iconify/react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { motion } from 'framer-motion';
import { useNextSanityImage } from 'next-sanity-image';

import { NextImageFill } from '@/components/elements';

import { client } from '@/service/sanityClient';
import { BackdropImage } from '@/utils/constants/imageCloud';
import { stacksProps } from '@/utils/constants/skills';

type IProps = {
  title: string;
  imgUrl: SanityImageSource;
  tags: string[];
  stacks: stacksProps[];
};

const SquishyCard = ({ title, imgUrl, tags, stacks }: IProps) => {
  return (
    <div className='mx-auto w-full'>
      <Card title={title} imgUrl={imgUrl} tags={tags} stacks={stacks} />
    </div>
  );
};

const Card = ({ title, imgUrl, tags, stacks }: IProps) => {
  return (
    <motion.div
      whileHover='hover'
      transition={{
        duration: 1,
        ease: 'backInOut',
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className='relative h-96 w-full overflow-hidden rounded-xl bg-accent p-8 shadow-lg'
    >
      <div className='relative z-10 flex h-full flex-col items-start justify-end gap-1'>
        <span className='mb-1 block w-fit rounded-full bg-primary/50 px-3 py-0.5 text-xs font-light text-accent'>
          {tags?.[0]}
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: 'backInOut',
          }}
          className='block origin-top-left text-lg font-black leading-[1.1] text-primary md:text-xl'
        >
          {title}
        </motion.span>
        <div className='flex flex-row gap-2'>
          {stacks.map(({ className, icon }, o) => (
            <Icon icon={icon} className={className} key={o} />
          ))}
        </div>
      </div>
      <Background imgUrl={imgUrl} />
    </motion.div>
  );
};

const Background = ({ imgUrl }: { imgUrl: SanityImageSource }) => {
  const imageProps = useNextSanityImage(client, imgUrl);

  return (
    <motion.div
      className='absolute right-0 top-0 z-0 h-96 w-80 px-4'
      variants={{
        hover: {
          scale: 1.4,
        },
      }}
      transition={{
        duration: 1,
        ease: 'backInOut',
      }}
    >
      <div className='flex justify-end'>
        <motion.div
          variants={{
            hover: {
              scaleY: 1.1,
              y: -7,
            },
          }}
          transition={{
            duration: 1,
            ease: 'backInOut',
            delay: 0.1,
          }}
          className='aspect-square h-52 overflow-hidden rounded-full'
        >
          <NextImageFill
            alt='backdrop-image'
            src={imageProps.src ? imageProps.src : BackdropImage}
            figureClassName='h-full w-full rounded-lg overflow-hidden squishy-brightness'
            imageClassName='scale-125'
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SquishyCard;
