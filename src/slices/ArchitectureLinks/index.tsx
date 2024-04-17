import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import styles from './ArchitectureLinks.module.css';
import Arrow from '@/components/Arrow';
import Link from 'next/link';

/**
 * Props for `ArchitectureLinks`.
 */
export type ArchitectureLinksProps =
  SliceComponentProps<Content.ArchitectureLinksSlice>;

/**
 * Component for "ArchitectureLinks" Slices.
 */
const ArchitectureLinks = ({ slice }: ArchitectureLinksProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.Links}
    >
      <PrismicRichText field={slice.primary.link_title} />
      <PrismicRichText field={slice.primary.link_description} />
      <div className={styles.LinkContainer}>
        {slice.variation === 'default' ? (
          <Link
            target="_blank"
            href={slice.primary.link_link as unknown as string}
          >
            Mehr erfahren
            <span>
              <Arrow />
            </span>
          </Link>
        ) : (
          <Link
            target="_blank"
            href={slice.primary.link_link as unknown as string}
          >
            Mehr erfahren
            <span>
              <Arrow />
            </span>
          </Link>
        )}
      </div>
    </section>
  );
};

export default ArchitectureLinks;
