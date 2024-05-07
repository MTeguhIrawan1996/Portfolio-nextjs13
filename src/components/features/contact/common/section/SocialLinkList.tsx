'use client';
import { Icon } from '@iconify/react';
import { useAnimate } from 'framer-motion';
import * as React from 'react';

const SocialLinkList = () => {
  return (
    <div className='bg-primary-100 dark:bg-primary-400 rounded-xl px-4 py-6'>
      <div className='mx-auto max-w-7xl'>
        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
  return (
    <div className='divide-primary-300 border-primary-300 divide-y border'>
      <div className='divide-primary-300 grid grid-cols-2 divide-x'>
        <LinkBox icon='mdi:github' href='https://github.com/MTeguhIrawan1996' />
        <LinkBox
          icon='mdi:linkedin'
          href='https://www.linkedin.com/in/irawan-m-774762229/'
        />
      </div>
      <div className='divide-primary-300 grid grid-cols-4 divide-x'>
        <LinkBox
          icon='ic:baseline-tiktok'
          href='https://www.tiktok.com/@onedev0?_t=8m2FF4Eo9Nx&_r=1'
        />
        <LinkBox
          icon='mdi:instagram'
          href='https://www.instagram.com/whaann__?igsh=aTJ1NG9zZmRqOXVr&utm_source=qr'
        />
        <LinkBox
          icon='ic:baseline-facebook'
          href='https://www.facebook.com/teguh.coollpartii?mibextid=kFxxJD'
        />
        <LinkBox
          icon='simple-icons:showwcase'
          href='https://www.showwcase.com/teguhirawan1996'
        />
      </div>
    </div>
  );
};

const NO_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
const BOTTOM_RIGHT_CLIP = 'polygon(0 0, 100% 0, 0 0, 0% 100%)';
const TOP_RIGHT_CLIP = 'polygon(0 0, 0 100%, 100% 100%, 0% 100%)';
const BOTTOM_LEFT_CLIP = 'polygon(100% 100%, 100% 0, 100% 100%, 0 100%)';
const TOP_LEFT_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 100% 0)';

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ icon, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const box = (e.target as any).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: 'left',
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: 'right',
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: 'top',
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: 'bottom',
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className='relative grid h-20 w-full place-content-center sm:h-28 md:h-24'
    >
      <Icon
        icon={icon}
        className='dark:text-darkText text-xl text-gray-600 md:text-2xl'
      />
      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className='absolute inset-0 grid place-content-center bg-neutral-900 text-white'
      >
        <Icon icon={icon} className='text-xl md:text-2xl' />
      </div>
    </a>
  );
};

export default SocialLinkList;
