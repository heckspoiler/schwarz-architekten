'use client';

import { PrismicNextImage } from '@prismicio/next';
import styles from './ImageGridContainer.module.css';
import { ProjectSlideStore } from '@/stores/SliderStore';

type TextContainerProps = {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  page?: any;
};

export default function ImageGridContainer({
  as: Container = 'section',
  page,
}: TextContainerProps) {
  const setIsClicked = (ProjectSlideStore() as any).setIsClicked;
  const IsClicked = (ProjectSlideStore() as any).IsClicked;

  return (
    <>
      <Container className={styles.Container}>
        {page.data.project_image_gallery.map((item: any, index: any) => (
          <div
            key={index}
            className={styles.ImageGridItem}
            onClick={() => setIsClicked(!IsClicked)}
          >
            <PrismicNextImage
              field={page.data.project_image_gallery[index].project_image}
            />
          </div>
        ))}
      </Container>
    </>
  );
}
