'use client';

import React, { useEffect, useState } from 'react';
import Arrow from '@/components/Arrow';
import TitleContainer from '@/components/containers/project/TitleContainer';
import { PrismicNextImage } from '@prismicio/next';
import { ImageFieldImage } from '@prismicio/client';

export const ProjectsCarousel = ({
  projects,
  styles,
}: {
  projects: any[]; // Adjusted for simplicity; replace any with your ProjectData type if needed
  styles: any;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    if (!isHovered) {
      const slideCount = projects.length;
      const interval = setInterval(() => {
        setCurrentSlide((current) => (current + 1) % slideCount);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [projects.length, isHovered]);

  useEffect(() => {
    if (!isHovered) {
      const carousel = document.querySelector(
        `.${styles.Carousel}`
      ) as HTMLElement;
      if (carousel) {
        carousel.style.transform = `translateX(-${currentSlide * 100}vw)`;
        carousel.style.transition =
          'transform 1s cubic-bezier(0.455, 0.03, 0.515, 0.955)';
      }
    }
  }, [currentSlide, isHovered, styles.Carousel]);

  return (
    <section className={styles.CarouselContainer}>
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
                  <a href={project.url ?? '#'} className={styles.Anchor}>
                    Mehr sehen
                    <span>
                      <Arrow />
                    </span>
                  </a>
                </div>
              </TitleContainer>
            </div>
            <div
              className={styles.ImageContainer}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
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
