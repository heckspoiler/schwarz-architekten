import { Content } from '@prismicio/client';
import Image from 'next/image';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
import styles from './Hero.module.css';
import Bounded from '@/components/containers/Bounded';
import HeroTextContainer from '@/components/containers/HeroTextContainer';
import HeroImageContainer from '@/components/containers/HeroImageContainer';
import HeadingContainer from '@/components/containers/HeadingContainer';
import Link from '@/components/Link';

const components: JSXMapSerializer = {
  heading1: ({ children }) => <h1 className={styles.Heading}>{children}</h1>,
  paragraph: ({ children }) => <p className={styles.Index}>{children}</p>,
  heading5: ({ children }) => (
    <h5 className={styles.Description}>{children}</h5>
  ),
};

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded //is sort of a container that will be used on every page
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <HeroTextContainer>
        <HeadingContainer>
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
          <PrismicRichText
            field={slice.primary.index}
            components={components}
          />
        </HeadingContainer>
        <PrismicRichText
          field={slice.primary.description}
          components={components}
        />

        <Link field={slice.primary.project_link} data-testid="hero-link" />
      </HeroTextContainer>
      <HeroImageContainer>
        <PrismicNextImage field={slice.primary.hero_image} />
      </HeroImageContainer>
    </Bounded>
  );
};

export default Hero;
