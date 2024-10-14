'use client';

import React from 'react';
import Arrow from '@/components/Arrow';
import { PrismicNextImage } from '@prismicio/next';
import { ImageFieldImage } from '@prismicio/client';

import styles from './Grid.module.css';
import Link from 'next/link';

export const ProjectsGrid = ({ projects }: { projects: any }) => {
  return (
    <section className={styles.ProjectsGridContainer}>
      <section className={styles.GridContainer}>
        {projects.map((project: any) => {
          const projectImage = project.data.project_preview_image.id
            ? project.data.project_preview_image
            : project.data.project_main_image;
          return (
            <div key={project.id} className={styles.GridItemContainer}>
              <div className={styles.GridItem}>
                <div className={styles.ImageContainer}>
                  <Link href={project.url}>
                    <PrismicNextImage field={projectImage as ImageFieldImage} />
                  </Link>
                </div>
              </div>
              <div className={styles.ProjectInfo}>
                <div className={styles.ProjectsBlaBla}>
                  <p className={styles.ProjectIndex}>
                    {project.data.project_index?.[0]?.text}
                  </p>
                  <div>
                    <h1>{project.data.project_title?.[0]?.text}</h1>
                    <p className={styles.ProjectDescription}>
                      {project.data.project_subtitle?.[0]?.text}
                    </p>
                    <a href={project.url ?? '#'} className={styles.Anchor}>
                      Mehr sehen
                      <span>
                        <Arrow />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};
