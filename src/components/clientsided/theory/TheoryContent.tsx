'use client';

import { useState } from 'react';
import Arrow from '@/components/Arrow';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import React from 'react';
import Link from 'next/link';

interface TheoryContentProps {
  styles: any;
  slice: any;
}

export const TheoryContent: React.FC<TheoryContentProps> = ({
  styles,
  slice,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <PrismicNextLink field={slice.primary.document_link} target="_blank">
        <div
          className={styles.Container}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.IndexContainer}>
            <PrismicRichText field={slice.primary.theory_index} />
          </div>
          <div className={styles.TextContainer}>
            <div className={styles.HeadingContainer}>
              <PrismicRichText field={slice.primary.theory_title} />
              <div className={styles.ArrowContainer}>
                <Arrow />
              </div>
            </div>
            <PrismicRichText field={slice.primary.theory_author} />
          </div>
        </div>
        <div
          className={`${styles.ImageContainer} ${isHovered ? styles.ImageContainerVisible : ''}`}
        >
          <PrismicNextImage field={slice.primary.theory_image} />
        </div>
      </PrismicNextLink>
    </>
  );
};
