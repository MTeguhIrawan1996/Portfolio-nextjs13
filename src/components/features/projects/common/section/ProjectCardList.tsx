'use client';

import * as React from 'react';

import { PrimaryLink, SectionWrapper } from '@/components/elements';
import SquishyCard from '@/components/features/projects/common/elements/SquishyCard';

import { useReadAllPortfolio } from '@/service/useReadPortfolioAll';
import { STACKS } from '@/utils/constants/skills';

const ProjectCardList = () => {
  const { data } = useReadAllPortfolio();

  return (
    <SectionWrapper
      title='Projects'
      subTitle='Showcasing my passion for technology, design, and problem-solving through code.'
      icon='mdi:star-box-multiple-outline'
    >
      <div className='grid grid-cols-1 gap-6 p-4 md:grid-cols-2'>
        {data?.map(({ title, imgUrl, projectLink, tags, techs }, i) => {
          const newArray = STACKS.filter((item) => techs?.includes(item.name));

          return (
            <PrimaryLink href={projectLink} key={i} openNewTab>
              <SquishyCard
                title={title}
                imgUrl={imgUrl}
                tags={tags}
                stacks={newArray}
              />
            </PrimaryLink>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default ProjectCardList;
