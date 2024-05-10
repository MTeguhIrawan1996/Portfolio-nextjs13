import { Metadata } from 'next';

import { BlogsPage } from '@/components/features';

export const metadata: Metadata = {
  title: 'Blogs',
};

export default function Blogs() {
  return <BlogsPage />;
}
