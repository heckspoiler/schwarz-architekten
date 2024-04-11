import { Metadata } from 'next';
import { PrismicRichText, SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Bounded from '@/components/containers/Bounded';
import TitleContainer from '@/components/containers/project/TitleContainer';
import styles from './About.module.css';
import TextblockContainer from '@/components/containers/project/TextblockContainer';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('about');
  const employees = await client.getByType('employee');

  console.log(employees.results[0].data);

  return (
    <Bounded>
      <TitleContainer>
        <section className={styles.TitleSection}>
          <PrismicRichText field={page.data.about_title} />
        </section>
      </TitleContainer>
      <section className={styles.ContentSection}>
        <TextblockContainer>
          <section className={styles.DescriptionContainer}>
            <PrismicRichText field={page.data.about_description} />
          </section>
          <section className={styles.TeamContainer}>
            <section className={styles.TeamSubtitle}>
              <PrismicRichText field={page.data.about_subtitle} />
            </section>
            <section className={styles.EmployeeContainer}>
              <SliceZone slices={page.data.slices} components={components} />
            </section>
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
