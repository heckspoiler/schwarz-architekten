import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import styles from './ProjectInfo.module.css';
import Arrow from '@/components/Arrow';
import { PrismicNextLink } from '@prismicio/next';

/**
 * Props for `ProjectInfo`.
 */
export type ProjectInfoProps = SliceComponentProps<Content.ProjectInfoSlice>;

/**
 * Component for "ProjectInfo" Slices.
 */
const ProjectInfo = ({ slice }: ProjectInfoProps): JSX.Element => {
  return (
    <>
      {slice.variation === 'default' && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className={styles.ProjectInfo}
        >
          <PrismicRichText field={slice.primary.project_index} />
          <div className={styles.HeadingContainer}>
            <PrismicRichText field={slice.primary.project_title} />
            <PrismicRichText field={slice.primary.project_description} />
            <div className={styles.LinkField}>
              <PrismicNextLink field={slice.primary.call_to_action}>
                Mehr sehen
              </PrismicNextLink>
              <Arrow width={8} height={8} />
            </div>
          </div>
        </section>
      )}

      {slice.variation === 'project' && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className={styles.ProjectInfo}
        >
          <PrismicRichText field={slice.primary.project_index} />
          <div className={styles.HeadingContainer}>
            <PrismicRichText field={slice.primary.project_title} />
            <PrismicRichText field={slice.primary.project_description} />
          </div>
        </section>
      )}

      {slice.variation === 'contactLinks' && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className={styles.ExternalInfo}
        >
          <div className={styles.ExternalContainer}>
            <PrismicRichText field={slice.primary.external_title} />
            <PrismicRichText field={slice.primary.external_description} />
            <div className={styles.ExternalLinkField}>
              <PrismicNextLink field={slice.primary.call_to_action}>
                Mehr erfahren
              </PrismicNextLink>
              <Arrow width={8} height={8} />
            </div>
          </div>
        </section>
      )}

      {slice.variation === 'newsInformation' && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className={styles.NewsInfo}
        >
          <div className={styles.Index}>
            <PrismicRichText field={slice.primary.news_index} />
          </div>
          <div className={styles.NewsContainer}>
            <PrismicRichText field={slice.primary.news_title} />
            <PrismicRichText field={slice.primary.news_description} />
            <div className={styles.NewsFilterContainer}>
              {slice.items.map((item, i) => (
                <p key={i} className={styles.FilterLink}>
                  {item.filter_link}
                  {i < slice.items.length - 1 ? ' | ' : ''}
                </p>
              ))}
            </div>
            <div className={styles.NewsLinkField}>
              <PrismicNextLink field={slice.primary.call_to_action}>
                Mehr sehen
              </PrismicNextLink>
              <Arrow width={8} height={8} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProjectInfo;
