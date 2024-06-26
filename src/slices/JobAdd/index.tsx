import { Content, RTNode } from '@prismicio/client';
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from '@prismicio/react';
import styles from './JobAdd.module.css';
import Arrow from '@/components/Arrow';
import Link from 'next/link';

/**
 * Props for `JobAdd`.
 */
export type JobAddProps = SliceComponentProps<Content.JobAddSlice>;

/**
 * Component for "JobAdd" Slices.
 */

const JobAdd = ({ slice }: JobAddProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.JobAdd}
    >
      <div className={styles.VacancyIndex}>
        <PrismicRichText field={slice.primary.vacancy_index} />
      </div>
      <PrismicRichText field={slice.primary.vacancy_title} />
      <div className={styles.VacancyDescription}>
        <PrismicRichText field={slice.primary.vacancy_description} />
      </div>

      <Link
        href={`mailto:info@schwarz-architekten.com?subject=Bewerbung ${(slice.primary.vacancy_title[0] as any).text}`}
        className={styles.Link}
      >
        {slice.primary.vacancy_link}
        <Arrow />
      </Link>
    </section>
  );
};

export default JobAdd;
