'use client';

import React, { useEffect, useState } from 'react';
import Arrow from '@/components/Arrow';
import TitleContainer from '@/components/containers/project/TitleContainer';
import { PrismicNextImage } from '@prismicio/next';
import { ImageFieldImage } from '@prismicio/client';
import styles from './ProjectsCarousel.module.css';
import Link from 'next/link';

export const ProjectsCarousel = ({ projects }: { projects: any[] }) => {
  const [clicks, setClicks] = useState(0);

  const nextSlide = () => {
    setClicks((prevClicks) => prevClicks + 1);
  };

  const previousSlide = () => {
    setClicks((prevClicks) => prevClicks - 1);
  };

  useEffect(() => {
    const carousel = document.querySelector(
      `.${styles.Carousel}`
    ) as HTMLElement;
    if (carousel) {
      carousel.style.transform = `translateX(-${clicks * 100}vw)`;
      carousel.style.transition =
        'transform 1s cubic-bezier(0.455, 0.03, 0.515, 0.955)';
    }
  }, [clicks]);

  return (
    <section className={styles.CarouselContainer}>
      <div className={styles.ArrowContainer}>
        <div className={styles.Arrow} onClick={previousSlide}>
          <span></span>
        </div>
        <div className={styles.Arrow} onClick={nextSlide}>
          <span></span>
        </div>
      </div>
      <section className={styles.Carousel}>
        {projects.map((project: any) => (
          <section key={project.id} className={styles.SlideContainer}>
            <div className={styles.ProjectInfo}>
              <TitleContainer>
                <p className={styles.ProjectIndex}>
                  {project.data.project_index?.[0]?.text}
                </p>
                <div>
                  <h1>{project.data.project_title?.[0]?.text}</h1>
                  <p>{project.data.project_subtitle?.[0]?.text}</p>
                  <Link href={project.url ?? '#'} className={styles.Anchor}>
                    Mehr sehen
                    <span>
                      <Arrow />
                    </span>
                  </Link>
                </div>
              </TitleContainer>
            </div>
            <div className={styles.ImageContainer}>
              <Link href={project.url ?? '#'}>
                <PrismicNextImage
                  field={project.data.project_main_image as ImageFieldImage}
                />
              </Link>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
};
