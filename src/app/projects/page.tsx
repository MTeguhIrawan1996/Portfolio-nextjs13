import { Metadata } from 'next';

import { ProjectsPage } from '@/components/features';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function Home() {
  return <ProjectsPage />;
}
