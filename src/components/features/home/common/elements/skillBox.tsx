'use client';

import { Icon } from '@iconify/react';
import * as React from 'react';

import { stacksProps } from '@/utils/constants/skills';

const SkillBox: React.FC<stacksProps> = ({ className, icon, name }) => {
  return (
    <div className='flex min-w-[120px] flex-row items-center justify-center gap-2 rounded-full bg-white px-4 py-1 shadow-[0_3px_10px_rgba(0,0,0,0.3)] dark:bg-dark dark:shadow-white/50'>
      <Icon icon={icon} className={className} />
      <span className='text-response-base font-normal text-primary-500 dark:text-darkText'>
        {name}
      </span>
    </div>
  );
};

export default SkillBox;
