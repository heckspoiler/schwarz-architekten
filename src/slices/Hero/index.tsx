import { Content } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import styles from './Hero.module.css';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.Main}
    >
      <div className={styles.TextContainer}>
        <div className={styles.HeadingContainer}>
          <PrismicRichText
            field={slice.primary.heading}
            components={{
              heading1: ({ children }) => (
                <h1 className={styles.Heading}>{children}</h1>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.index}
            components={{
              paragraph: ({ children }) => (
                <p className={styles.Index}>{children}</p>
              ),
            }}
          />
        </div>
        <PrismicRichText
          field={slice.primary.description}
          components={{
            heading5: ({ children }) => (
              <h5 className={styles.Description}>{children}</h5>
            ),
          }}
        />

        <PrismicNextLink field={slice.primary.project_link}>
          Mehr sehen
        </PrismicNextLink>
      </div>
      <PrismicNextImage field={slice.primary.hero_image} />
    </section>
  );
};

export default Hero;
