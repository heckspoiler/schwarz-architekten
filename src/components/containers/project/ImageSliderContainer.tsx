'use client';

import React, { useState, useEffect } from 'react';
import { ProjectSlideStore } from '@/stores/SliderStore';
import styles from './ImageSliderContainer.module.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

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
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = page.data.project_image_gallery.map((item: any) => ({
    src: item.project_image.url,
    alt: item.project_image.alt || '',
  }));

  useEffect(() => {
    isClicked ? setIsOpen(true) : setIsOpen(false);
  }, [isClicked]);

  const handleClose = () => {
    setIsOpen(false);
    setIsClicked(false);
  };

  return (
    <Lightbox
      open={isOpen}
      close={handleClose}
      slides={slides}
      styles={{
        container: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
        },
        button: {
          boxShadow: 'none',
          filter: 'none',
          '--yarl__color_button_active': 'black',
        },
        toolbar: {
          '--yarl__color_button': 'black',
          '--yarl__color_button_active': 'black',
        },
        navigationNext: {
          '--yarl__color_button': 'black',
        },
        navigationPrev: {
          '--yarl__color_button': 'black',
        },
      }}
    />
  );
};
