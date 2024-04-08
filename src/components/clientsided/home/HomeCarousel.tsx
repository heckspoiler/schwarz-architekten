'use client';

import React, { useEffect, useState } from 'react';
import Arrow from '@/components/Arrow';
import TitleContainer from '@/components/containers/project/TitleContainer';
import { PrismicNextImage } from '@prismicio/next';
import styles from './HomeCarousel.module.css';

export const Carousel = ({ projects }: { projects: any[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  console.log('x');
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (!isHovered) {
      const slideCount = projects.length;
      const interval = setInterval(() => {
        setCurrentSlide((current) => (current + 1) % slideCount);
      }, 5000);

      return () => clearInterval(interval);
    } else {
      return;
    }
  }, [projects.length, isHovered]);

  useEffect(() => {
    if (isHovered) {
      return;
    } else {
      const carousel = document.querySelector(
        `.${styles.Carousel}`
      ) as HTMLElement;
      if (carousel) {
        const newTransform = `translateX(-${currentSlide * 100}vw)`;
        carousel.style.transform = newTransform;
        carousel.style.transition =
          'transform 1s cubic-bezier(0.455, 0.03, 0.515, 0.955)';
      }
    }
  }, [currentSlide, isHovered]);

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
              <div
                className={styles.ImageContainer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a href={project.url ?? '#'}>
                  <PrismicNextImage
                    field={project.data.project_main_image}
                    key={project.id}
                  />
                </a>
              </div>
            </section>
          ))}
        </section>
      </section>
    </div>
  );
};
