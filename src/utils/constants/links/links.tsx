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
    icon: <IconHome className='aspect-square h-5 font-medium text-primary' />,
  },
  // {
  //   label: 'About',
  //   href: '/about',
  //   icon: (
  //     <IconPlant className='aspect-square h-5 text-primary font-medium' />
  //   ),
  // },
  {
    label: 'Blogs',
    href: '/blogs',
    icon: (
      <IconEditCircle className='aspect-square h-5 font-medium text-primary' />
    ),
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: (
      <IconAlignBoxCenterMiddle className='aspect-square h-5 font-medium text-primary' />
    ),
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <IconSend className='aspect-square h-5 font-medium text-primary' />,
  },
];
