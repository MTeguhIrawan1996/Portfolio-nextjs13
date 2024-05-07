'use client';

import { Icon } from '@iconify/react';
import * as React from 'react';

import { stacksProps } from '@/utils/constants/skills';

const SkillBadge: React.FC<stacksProps> = ({ className, icon, name }) => {
  return (
    <div className='flex min-w-[120px] flex-row items-center justify-center gap-2 rounded-full bg-base-100 px-4 py-1 shadow-[0_3px_10px_rgba(0,0,0,0.3)] shadow-secondary/50'>
      <Icon icon={icon} className={className} />
      <span className='text-response-base font-normal text-primary'>
        {name}
      </span>
    </div>
  );
};

export default SkillBadge;
