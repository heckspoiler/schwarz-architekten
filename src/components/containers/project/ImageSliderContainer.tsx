'use client';

import React, { useState, useRef, MouseEvent } from 'react';
import { ProjectSlideStore } from '@/stores/SliderStore';
import styles from './ImageSliderContainer.module.css';
import { PrismicNextImage } from '@prismicio/next';

type TextContainerProps = {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  page?: any;
};

export const ImageSliderContainer = ({
  as: Container = 'section',
  page,
}: TextContainerProps) => {
  const isClicked = (ProjectSlideStore() as any).isClicked;
  const setIsClicked = (ProjectSlideStore() as any).setIsClicked;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const startDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const currentScrollLeft = sliderRef.current.scrollLeft;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(currentScrollLeft);
    sliderRef.current.style.cursor = 'grabbing';
  };

  const whileDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const newWalk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - newWalk;
  };

  const stopDragging = () => {
    if (!sliderRef.current) return;
    setIsDragging(false);
    sliderRef.current.style.cursor = 'grab';
  };

  const revertToDefault = () => {
    setIsClicked(false);
    setTimeout(() => {
      sliderRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
    }, 200);
  };

  return (
    <>
      <div>
        <div
          className={`${styles.Schliessen} ${isClicked ? styles.CrossVisible : ''}`}
          onClick={() => revertToDefault()}
        >
          <div className={styles.CrossContainer}>
            <div className={styles.Cross}></div>
            <div className={styles.Cross}></div>
          </div>
        </div>
      </div>
      <Container
        className={`${styles.SlideContainer} ${isClicked ? styles.isVisible : ''}`}
      >
        <div className={styles.SumtingContainer} ref={sliderRef}>
          <div
            className={styles.ImageSliderContainer}
            onMouseDown={startDragging}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onMouseMove={whileDragging}
          >
            {page.data.project_image_gallery.map((item: any, index: number) => (
              <div key={index} className={styles.ImageSlide}>
                <PrismicNextImage
                  field={page.data.project_image_gallery[index].project_image}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};
