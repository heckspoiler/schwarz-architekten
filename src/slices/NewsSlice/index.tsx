import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

import styles from './NewsSlice.module.css';
/**
 * Props for `NewsSlice`.
 */
export type NewsSliceProps = SliceComponentProps<Content.NewsSliceSlice>;

/**
 * Component for "NewsSlice" Slices.
 */
const NewsSlice = ({ slice }: NewsSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === 'default' && (
        <div className={styles.SliceContainer}>
          <PrismicRichText field={slice.primary.news_slice_title} />
          <PrismicRichText field={slice.primary.news_slice_description} />
        </div>
      )}
      {slice.variation === 'newsSliceNoTitle' && (
        <div className={styles.SliceContainer}>
          <PrismicRichText field={slice.primary.news_slice_description} />
        </div>
      )}
    </section>
  );
};

export default NewsSlice;
