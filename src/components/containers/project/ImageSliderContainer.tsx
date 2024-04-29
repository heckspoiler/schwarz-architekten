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

  const startDragging = (e: MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    console.log('startDragging', startX, scrollLeft);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = 'grabbing';
  };

  const stopDragging = () => {
    if (!sliderRef.current) return;
    setIsDragging(false);
    sliderRef.current.style.cursor = 'grab';
  };

  const whileDragging = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <div>
        <div
          className={`${styles.Schliessen} ${isClicked ? styles.CrossVisible : ''}`}
          onClick={() => setIsClicked(false)}
        >
          <div></div>
          <div></div>
        </div>
      </div>
      <Container
        className={`${styles.SlideContainer} ${isClicked ? styles.isVisible : ''}`}
      >
        <div className={styles.SumtingContainer}>
          <div
            className={styles.ImageSliderContainer}
            ref={sliderRef}
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
