import { Content } from '@prismicio/client';
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';

import styles from './Project.module.css';

export type ProjectProps = SliceComponentProps<Content.ProjectSlice>;

const Project = ({ slice }: ProjectProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className={styles.HeroContainer}>
        <section className={styles.TitleIndex}>
          <PrismicRichText field={slice.primary.project_index} />
          <section className={styles.HeadingContainer}>
            <PrismicRichText field={slice.primary.project_title} />
            <PrismicRichText field={slice.primary.project_brief} />
          </section>
        </section>
        <div className={styles.ImageContainer}>
          <PrismicImage field={slice.primary.hero_image} />
        </div>
      </section>
    </section>
  );
};

export default Project;
