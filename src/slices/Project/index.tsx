import { Content } from '@prismicio/client';
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';

import styles from './Project.module.css';
import HeroContainer from '@/components/containers/project/HeroContainer';
import HeroTextContainer from '@/components/containers/HeroTextContainer';

export type ProjectProps = SliceComponentProps<Content.ProjectSlice>;

const Project = ({ slice }: ProjectProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <HeroContainer>
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
                  <PrismicRichText
                    field={item.legend_title}
                    className={styles.LegendTitle}
                  />
                  <PrismicRichText
                    field={item.legend_description}
                    className={styles.LegendDescription}
                  />
                </div>
              ))}
          </div>
        </section>
      </HeroContainer>

      <section></section>
    </section>
  );
};

export default Project;
