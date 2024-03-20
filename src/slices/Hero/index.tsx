import { Content } from '@prismicio/client';
import Image from 'next/image';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import styles from './Hero.module.css';
import Bounded from '@/components/Bounded';

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded //is sort of a container that will be used on every page
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
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
        <PrismicNextLink
          field={slice.primary.project_link}
          className={styles.Anchor}
        >
          <div className={styles.AnchorContainer}>
            Mehr sehen
            <Image src="/icons/arrow.svg" alt="Arrow" width={10} height={10} />
          </div>
        </PrismicNextLink>
      </div>
      <div className={styles.ImageContainer}>
        <PrismicNextImage field={slice.primary.hero_image} />
      </div>
    </Bounded>
  );
};

export default Hero;
