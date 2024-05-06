import { Content } from '@prismicio/client';
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from '@prismicio/react';
import styles from './Employee.module.css';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import Arrow from '@/components/Arrow';
import Link from 'next/link';

/**
 * Props for `Employee`.
 */
export type EmployeeProps = SliceComponentProps<Content.EmployeeSlice>;

/**
 * Component for "Employee" Slices.
 */
const Employee = ({ slice }: EmployeeProps): JSX.Element => {
  return (
    <>
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
                  <PrismicRichText field={slice.primary.employee_university} />
                  {slice.primary.minergie &&
                  slice.primary.minergie.length > 0 ? (
                    <div>
                      <Link
                        href="https://www.minergie.ch/de/"
                        target="_blank"
                        className={styles.EmailContainerMinergie}
                      >
                        <PrismicRichText field={slice.primary.minergie} />
                        <span className={styles.ArrowContainer}>
                          <Arrow />
                        </span>
                      </Link>
                    </div>
                  ) : null}
                </div>
                <PrismicRichText field={slice.primary.employee_phone} />
                <Link
                  href={`mailto:${slice.primary.employee_email || ''}`}
                  className={styles.EmailContainer}
                >
                  <span>{slice.primary.employee_email}</span>
                  <span className={styles.ArrowContainer}>
                    <Arrow />
                  </span>
                </Link>
                {slice.primary.employee_biography &&
                slice.primary.employee_biography.length > 0 ? (
                  <div>
                    <PrismicNextLink
                      href="/uber-uns-2/team/dietrich-schwarz"
                      target="_blank"
                      className={styles.EmailContainerMinergie}
                    >
                      <p>{slice.primary.employee_biography} </p>
                      <span className={styles.ArrowContainer}>
                        <Arrow />
                      </span>
                    </PrismicNextLink>
                  </div>
                ) : null}
                <div className={styles.LinkedInContainer}>
                  <Link
                    href="https://www.linkedin.com/in/dietrich-schwarz-9a502ab1/?originalSubdomain=ch"
                    target="_blank"
                  >
                    <PrismicNextImage field={slice.primary.employee_linkedin} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Employee;
