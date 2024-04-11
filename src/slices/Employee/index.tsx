import { Content } from '@prismicio/client';
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from '@prismicio/react';
import styles from './Employee.module.css';
import { PrismicNextImage } from '@prismicio/next';
import Arrow from '@/components/Arrow';

/**
 * Props for `Employee`.
 */
export type EmployeeProps = SliceComponentProps<Content.EmployeeSlice>;

/**
 * Component for "Employee" Slices.
 */
const Employee = ({ slice }: EmployeeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.Employee}
    >
      <section className={styles.Image}>
        <PrismicNextImage field={slice.primary.employee_image} />
        <div className={styles.EmployeeInformation}>
          <div className={styles.EmployeeInformationContent}>
            <PrismicRichText field={slice.primary.employee_name} />
            <PrismicRichText field={slice.primary.employee_degree} />
            <div className={styles.LowerContent}>
              <div className={styles.PositionContainer}>
                <PrismicRichText field={slice.primary.employee_position} />
              </div>
              <PrismicRichText field={slice.primary.employee_phone} />
              <a
                href={`mailto:${slice.primary.employee_email || ''}`}
                className={styles.EmailContainer}
              >
                <span>{slice.primary.employee_email}</span>
                <span className={styles.ArrowContainer}>
                  <Arrow />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Employee;
