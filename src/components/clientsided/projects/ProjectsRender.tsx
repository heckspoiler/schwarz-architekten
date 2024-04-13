'use client';

import React, { useEffect, useState } from 'react';
import { ProjectsGrid } from './ProjectsGrid';
import { ProjectsCarousel } from './ProjectsCarousel';
import { SliderStore } from '@/stores/ProjectsStores';

export const ProjectsRender = ({
  projects,
}: {
  projects: any[]; // Adjusted for simplicity; replace any with your ProjectData type if needed
}) => {
  const activeView = (SliderStore() as any).activeView;
  return (
    <section>
      {activeView === 'grid' ? (
        <ProjectsGrid projects={projects} />
      ) : (
        <ProjectsCarousel projects={projects} />
      )}
    </section>
  );
};
