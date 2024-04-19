import { Metadata } from 'next';
import { PrismicRichText, SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Bounded from '@/components/containers/Bounded';
import TitleContainer from '@/components/containers/project/TitleContainer';
import styles from './About.module.css';
import TextblockContainer from '@/components/containers/project/TextblockContainer';
import JobAdd from '@/slices/JobAdd';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('about');
  const employees = await client.getByType('employee');

  const employeeSlices = page.data.slices.filter(
    (slice) => slice.slice_type === 'employee'
  );
  const jobAddSlices = page.data.slices.filter(
    (slice) => slice.slice_type === 'job_add'
  );

  const awardSlices = page.data.slices.filter(
    (slice) => slice.slice_type === 'architecture_links'
  );

  return (
    <Bounded>
      <TitleContainer>
        <section className={styles.TitleSection}>
          <PrismicRichText field={page.data.about_title} />
        </section>
      </TitleContainer>
      <section className={styles.ContentSection}>
        <section className={styles.Employees}>
          <TextblockContainer>
            <section className={styles.DescriptionContainer}>
              <PrismicRichText field={page.data.about_description} />
            </section>
            <section className={styles.TeamContainer}>
              <section className={styles.TeamSubtitle}>
                <PrismicRichText field={page.data.about_subtitle} />
              </section>
              <section className={styles.EmployeeContainer}>
                <SliceZone slices={employeeSlices} components={components} />
              </section>
            </section>
          </TextblockContainer>
        </section>
        <TextblockContainer>
          <h2 className={styles.Subtitle}>Offene Stellen</h2>
          <section className={styles.JobAdds}>
            <SliceZone slices={jobAddSlices} components={components} />
          </section>
        </TextblockContainer>

        <TextblockContainer>
          <h2 className={styles.Subtitle}>Auszeichnungen</h2>
          <section className={styles.Awards}>
            <SliceZone slices={awardSlices} components={components} />
          </section>
        </TextblockContainer>
      </section>
    </Bounded>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('about');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
