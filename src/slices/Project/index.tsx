import { Content } from '@prismicio/client';
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';

import styles from './Project.module.css';

export type ProjectProps = SliceComponentProps<Content.ProjectSlice>;

const Project = ({ slice }: ProjectProps): JSX.Element => {
  const projectTitle = slice.primary.project_title;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className={styles.HeroContainer}>
        <PrismicRichText field={slice.primary.project_title} />
        <PrismicRichText field={slice.primary.project_index} />
        <PrismicRichText field={slice.primary.project_brief} />
        <PrismicImage field={slice.primary.hero_image} />
      </section>
    </section>
  );
};

export default Project;
