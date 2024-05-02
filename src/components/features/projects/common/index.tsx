import * as React from 'react';

import { Header } from '@/components/elements';
import ProjectCardList from '@/components/features/projects/common/section/ProjectCardList';

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <ProjectCardList />
    </>
  );
};

export default ProjectsPage;
