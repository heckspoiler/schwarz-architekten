'use client';

import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Arrow from '@/components/Arrow';
import TitleContainer from '@/components/containers/project/TitleContainer';
import { PrismicNextImage } from '@prismicio/next';
import styles from './HomeCarousel.module.css';
import { ImageFieldImage } from '@prismicio/client';
import { ProjectData } from '@/app/page';
import Link from 'next/link';
import { OverlayTextDocument } from '../../../../prismicio-types';

export const Carousel = ({
  projects,
  overlay,
  overlayText,
}: {
  projects: ProjectData[];
  overlay: ImageFieldImage | null | undefined;
  overlayText: OverlayTextDocument<string>[] | null | undefined;
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
      }, 4500);

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
  }, [currentSlide, isHovered]);

  useEffect(() => {
    const textOverlay = document.querySelector(
      `.${styles.TextOverlay}`
    ) as HTMLElement;

    if (textOverlay && overlayText) {
      // Animate text change using GSAP
      gsap.to(textOverlay, {
        y: -20, // Move up slightly for a seamless transition effect
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          // Update the content after fade-out
          textOverlay.innerHTML = `<h1>${
            overlayText[currentSlide % overlayText.length]?.data.overlay_text
          }</h1>`;
          gsap.fromTo(
            textOverlay,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3 }
          );
        },
      });
    }
  }, [currentSlide, overlayText]);

  return (
    <section className={styles.CarouselContainer}>
      <div className={styles.Overlay}>
        <PrismicNextImage field={overlay} />
      </div>

      <section className={styles.Carousel}>
        {projects.map((project: any, index: number) => (
          <section
            key={project.id}
            className={`${styles.SlideContainer} ${
              currentSlide === index ? styles.ActiveSlide : ''
            }`}
          >
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
            <div
              className={styles.ImageContainer}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={project.url ?? '#'}>
                <PrismicNextImage
                  field={project.data.project_main_image as ImageFieldImage}
                />
              </Link>
            </div>
          </section>
        ))}
      </section>

      <div className={styles.TextOverlay}>
        <h1>
          {overlayText &&
            overlayText[currentSlide % overlayText.length]?.data.overlay_text}
        </h1>
      </div>
    </section>
  );
};
