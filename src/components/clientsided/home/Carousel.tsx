'use client';

import React from 'react';
import Arrow from '@/components/Arrow';
import TitleContainer from '@/components/containers/project/TitleContainer';
import { PrismicNextImage } from '@prismicio/next';
import styles from './Carousel.module.css';

export const Carousel = ({ projects }: { projects: any[] }) => {
  return (
    <div>
      <section className={styles.CarouselContainer}>
        <section className={styles.Carousel}>
          {projects.map((project) => (
            <section key={project.id} className={styles.SlideContainer}>
              <TitleContainer key={project.id}>
                <p className={styles.ProjectIndex}>
                  {(project.data.project_index[0] as any)?.text}
                </p>
                <div>
                  <h1>{(project.data.project_title[0] as any)?.text}</h1>
                  <p>{(project.data.project_subtitle[0] as any)?.text}</p>
                  <a href={project.url ?? '#'} className={styles.Anchor}>
                    Mehr sehen
                    <span>
                      <Arrow height={8} width={8} />
                    </span>
                  </a>
                </div>
              </TitleContainer>
              <div className={styles.ImageContainer}>
                <PrismicNextImage
                  field={project.data.project_main_image}
                  key={project.id}
                />
              </div>
            </section>
          ))}
        </section>
      </section>
    </div>
  );
};
