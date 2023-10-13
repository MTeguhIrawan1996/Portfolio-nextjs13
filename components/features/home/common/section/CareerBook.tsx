import * as React from 'react';

import { SectionWrapper } from '@/components/elements';
import Card from '@/components/features/home/common/elements/card';

import { HpoImage, OptimapImage, SthImage } from '@/utils/constants/imageCloud';

const CareerData = [
  {
    title: 'PT. Optima Media Teknologi',
    subTitle: 'Frontend Web developer',
    iconCard: 'tabler:send',
    logo: OptimapImage,
    date: 'April 2023 - Present',
  },
  {
    title: 'HPO.NET',
    subTitle: 'Freelancer Web Developer',
    iconCard: 'ph:android-logo-bold',
    logo: HpoImage,
    date: 'November 2021 - June 2023',
  },
  {
    title: 'PT. Wira Usahatama Lestari',
    subTitle: 'Administarator',
    iconCard: 'pajamas:work',
    logo: SthImage,
    date: 'March 2020 - May 2022',
  },
];

const CareerBook = () => {
  return (
    <SectionWrapper
      title='Career'
      subTitle='My professional career journey.'
      icon='pajamas:work'
    >
      <div className='grid grid-cols-1 gap-4 p-2 md:grid-cols-2'>
        {CareerData.map(({ title, subTitle, iconCard, date, logo }, i) => (
          <Card
            title={title}
            subTitle={subTitle}
            iconCard={iconCard}
            logo={logo}
            date={date}
            key={i}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CareerBook;
