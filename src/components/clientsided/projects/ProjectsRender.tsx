'use client';

import React, { useEffect, useState } from 'react';
import { ProjectsGrid } from './ProjectsGrid';
import { ProjectsCarousel } from './ProjectsCarousel';
import { SliderStore } from '@/stores/ProjectsStores';

export const ProjectsRender = ({
  projects,
  styles,
}: {
  projects: any[]; // Adjusted for simplicity; replace any with your ProjectData type if needed
  styles: any;
}) => {
  const activeView = (SliderStore() as any).activeView;
  const setActiveView = (SliderStore() as any).setActiveView;
  return (
    <section>
      {activeView === 'grid' ? (
        <ProjectsGrid projects={projects} styles={styles} />
      ) : (
        <ProjectsCarousel projects={projects} styles={styles} />
      )}
    </section>
  );
};
