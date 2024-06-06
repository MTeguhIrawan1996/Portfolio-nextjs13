import { Metadata } from 'next';

import { BlogsPage } from '@/components/features';

export const metadata: Metadata = {
  title: 'Blogs',
};

export const revalidate = 600;

export default function Blogs() {
  return <BlogsPage />;
}
