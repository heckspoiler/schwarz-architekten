import { Content, LinkField } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import styles from './ArchitectureLinks.module.css';
import Arrow from '@/components/Arrow';
import Link from 'next/link';
import { PrismicNextLink } from '@prismicio/next';

/**
 * Props for `ArchitectureLinks`.
 */
export type ArchitectureLinksProps =
  SliceComponentProps<Content.ArchitectureLinksSlice>;

/**
 * Component for "ArchitectureLinks" Slices.
 */
const ArchitectureLinks = ({ slice }: ArchitectureLinksProps): JSX.Element => {
  // Function to determine what to render based on the slice variation
  const renderLink = () => {
    switch (slice.variation) {
      case 'default':
        return (
          <div className={styles.LinkContainer}>
            <Link
              target="_blank"
              href={slice.primary.link_link as unknown as string}
            >
              Mehr erfahren
              <span>
                <Arrow />
              </span>
            </Link>
          </div>
        );

      case 'generalLinks':
        return (
          <div className={styles.LinkContainer}>
            <Link
              target="_blank"
              href={slice.primary.link_link as unknown as string}
            >
              Mehr erfahren
              <span>
                <Arrow />
              </span>
            </Link>
          </div>
        );

      case 'awards':
        return (
          <section className={styles.AwardsLinks}>
            <div className={styles.LinkContainer}>
              <PrismicNextLink
                target="_blank"
                field={
                  slice.primary.project_link as LinkField | null | undefined
                }
              >
                Zum Projekt
                <span>
                  <Arrow />
                </span>
              </PrismicNextLink>
            </div>
            <div className={styles.LinkContainer}>
              <PrismicNextLink
                target="_blank"
                field={slice.primary.award_link as LinkField | null | undefined}
              >
                Mehr erfahren
                <span>
                  <Arrow />
                </span>
              </PrismicNextLink>
            </div>
          </section>
        );
      case 'books':
        return (
          <section className={styles.BookLinks}>
            <div className={styles.OtherLinkContainer}>
              <PrismicRichText field={slice.primary.book_author} />
            </div>
            <div className={styles.OtherLinkContainer}>
              <PrismicRichText field={slice.primary.isbn} />
            </div>
            <div className={styles.LinkContainer}>
              <PrismicNextLink
                target="_blank"
                field={slice.primary.book_link as LinkField | null | undefined}
              >
                Mehr erfahren
                <span>
                  <Arrow />
                </span>
              </PrismicNextLink>
            </div>
          </section>
        );
    }
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.Links}
    >
      <div className={styles.MainPara}>
        <PrismicRichText field={slice.primary.link_title} />
        <PrismicRichText field={slice.primary.link_description} />
      </div>
      {renderLink()}
    </section>
  );
};
export default ArchitectureLinks;
