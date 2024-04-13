'use client';

import React from 'react';
import Arrow from '@/components/Arrow';
import TitleContainer from '@/components/containers/project/TitleContainer';
import { PrismicNextImage } from '@prismicio/next';
import { ImageFieldImage } from '@prismicio/client';
import styles from './ProjectsGrid.module.css';

export const ProjectsGrid = ({
  projects,
}: {
  projects: any[]; // Adjusted for simplicity; replace any with your ProjectData type if needed
}) => {
  return (
    <section className={styles.ProjectsGridContainer}>
      <section className={styles.GridContainer}>
        {projects.map((project: any) => (
          <section key={project.id} className={styles.GridItem}>
            <div className={styles.ProjectInfo}>
              <TitleContainer>
                <p className={styles.ProjectIndex}>
                  {project.data.project_index?.[0]?.text}
                </p>
                <div>
                  <h1>{project.data.project_title?.[0]?.text}</h1>
                  <p>{project.data.project_subtitle?.[0]?.text}</p>
                  <a href={project.url ?? '#'} className={styles.Anchor}>
                    Mehr sehen
                    <span>
                      <Arrow />
                    </span>
                  </a>
                </div>
              </TitleContainer>
            </div>
            <div className={styles.ImageContainer}>
              <a href={project.url ?? '#'}>
                <PrismicNextImage
                  field={project.data.project_main_image as ImageFieldImage}
                />
              </a>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
};
