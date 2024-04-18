import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import styles from './TheoryInformation.module.css';
import { TheoryContent } from '@/components/clientsided/theory/TheoryContent';

/**
 * Props for `TheoryInformation`.
 */
export type TheoryInformationProps =
  SliceComponentProps<Content.TheoryInformationSlice>;

/**
 * Component for "TheoryInformation" Slices.
 */
const TheoryInformation = ({ slice }: TheoryInformationProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.TheoryInformation}
    >
      <TheoryContent slice={slice} styles={styles} />
    </section>
  );
};

export default TheoryInformation;
