import { Content } from '@prismicio/client';
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from '@prismicio/react';
import styles from './JobAdd.module.css';
import Arrow from '@/components/Arrow';

/**
 * Props for `JobAdd`.
 */
export type JobAddProps = SliceComponentProps<Content.JobAddSlice>;

/**
 * Component for "JobAdd" Slices.
 */

const JobAdd = ({ slice }: JobAddProps): JSX.Element => {
  console.log(slice.primary.vacancy_title);
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
      <div className={styles.Link}>
        <a
          href={`mailto: info@schwarz-architekten.com?subject=Bewerbung ${slice.primary.vacancy_title[0]?.text} `}
        >
          {slice.primary.vacancy_link}
        </a>

        <Arrow />
      </div>
    </section>
  );
};

export default JobAdd;
