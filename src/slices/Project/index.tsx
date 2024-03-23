import { Content } from '@prismicio/client';
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';

import styles from './Project.module.css';
import HeroContainer from '@/components/containers/project/HeroContainer';
import HeroTextContainer from '@/components/containers/HeroTextContainer';
import TextblockContainer from '@/components/containers/project/TextblockContainer';
import ImageGridContainer from '@/components/containers/project/ImageGridContainer';

export type ProjectProps = SliceComponentProps<Content.ProjectSlice>;

const Project = ({ slice }: ProjectProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <HeroTextContainer>
        <div className={styles.Index}>
          <PrismicRichText field={slice.primary.project_index} />
        </div>
        <section className={styles.HeadingContainer}>
          <PrismicRichText field={slice.primary.project_title} />
          <PrismicRichText field={slice.primary.project_brief} />
        </section>
      </HeroTextContainer>
      <section className={styles.Hero}>
        <div className={styles.ImageContainer}>
          <PrismicImage field={slice.primary.hero_image} />
        </div>
        <div className={styles.LegendsContainer}>
          {slice.items &&
            Array.isArray(slice.items) &&
            slice.items.map((item, index) => (
              <div key={`legend-${index}`} className={styles.Legend}>
                <PrismicRichText field={item.legend_title} />
                <PrismicRichText field={item.legend_description} />
              </div>
            ))}
        </div>
      </section>
      hurensohn
    </section>
  );
};

export default Project;
