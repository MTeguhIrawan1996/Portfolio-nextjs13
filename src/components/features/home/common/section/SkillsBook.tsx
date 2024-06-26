import * as React from 'react';
import Marquee from 'react-fast-marquee';

import { SectionWrapper } from '@/components/elements';
import SkillBadge from '@/components/features/home/common/elements/SkillBadge';

import { STACKS } from '@/utils/constants/skills';

const Skills = () => {
  return (
    <SectionWrapper
      title='Skills'
      subTitle='My tech stack skills'
      icon='mdi:robot-outline'
    >
      <div className='relative flex flex-col space-y-1 overflow-x-hidden px-2 py-2'>
        <div className='absolute inset-0 z-40 bg-primary/10 opacity-10' />
        {Array.from({ length: 2 }, (_, i) => {
          const shuffledStacks = STACKS.slice().sort(() => Math.random() - 0.5);
          return (
            <Marquee
              key={i}
              direction={i % 2 === 0 ? 'left' : 'right'}
              speed={20}
              className='space-x-3'
            >
              <div className='flex space-x-3 py-3'>
                {shuffledStacks.map(({ name, icon, className }, index) => (
                  <SkillBadge
                    name={name}
                    icon={icon}
                    className={className}
                    key={index}
                  />
                ))}
              </div>
            </Marquee>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
