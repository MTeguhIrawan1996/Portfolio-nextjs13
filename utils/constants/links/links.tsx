import {
  IconAlignBoxCenterMiddle,
  IconEditCircle,
  IconHome,
  IconSend,
} from '@tabler/icons-react';

import { IMenuItem } from '@/types/layout';

export const links: IMenuItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: (
      <IconHome className='aspect-square h-5 text-gray-600 dark:text-darkText' />
    ),
  },
  // {
  //   label: 'About',
  //   href: '/about',
  //   icon: (
  //     <IconPlant className='aspect-square h-5 text-gray-600 dark:text-darkText' />
  //   ),
  // },
  {
    label: 'Blog',
    href: '/blog',
    icon: (
      <IconEditCircle className='aspect-square h-5 text-gray-600 dark:text-darkText' />
    ),
  },
  {
    label: 'Project',
    href: '/project',
    icon: (
      <IconAlignBoxCenterMiddle className='aspect-square h-5 text-gray-600 dark:text-darkText' />
    ),
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: (
      <IconSend className='aspect-square h-5 text-gray-600 dark:text-darkText' />
    ),
  },
];
