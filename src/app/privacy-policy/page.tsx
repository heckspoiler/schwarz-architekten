import { Metadata } from 'next';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import styles from './Privacy.module.css';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Bounded from '@/components/containers/Bounded';
import TitleContainer from '@/components/containers/project/TitleContainer';
import TextblockContainer from '@/components/containers/project/TextblockContainer';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('terms_of_service');

  return (
    <Bounded>
      <TitleContainer>
        <section className={styles.TitleContainer}>
          <PrismicRichText field={page.data.title} />
        </section>
      </TitleContainer>
      <TextblockContainer>
        <section className={styles.Main}>
          <SliceZone slices={page.data.slices} components={components} />
        </section>
      </TextblockContainer>
    </Bounded>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('terms_of_service');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
