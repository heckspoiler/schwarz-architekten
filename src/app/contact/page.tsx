import { Metadata } from 'next';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import Bounded from '@/components/containers/Bounded';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import TitleContainer from '@/components/containers/project/TitleContainer';
import styles from './Contact.module.css';
import TextblockContainer from '@/components/containers/project/TextblockContainer';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('contact');

  return (
    <Bounded>
      <TitleContainer>
        <section className={styles.TitleSection}>
          <PrismicRichText field={page.data.contact_title} />
        </section>
      </TitleContainer>
      <section className={styles.ContentSection}>
        <TextblockContainer>
          <div className={styles.DescriptionContainer}>
            <PrismicRichText field={page.data.contact_description_upper} />
          </div>
        </TextblockContainer>
        <section className={styles.FormSection}>
          <section className={styles.FormContainer}></section>
        </section>
      </section>
      <SliceZone slices={page.data.slices} components={components} />;
    </Bounded>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('contact');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
