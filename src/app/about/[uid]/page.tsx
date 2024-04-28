import { Metadata } from 'next';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import styles from './Biography.module.css';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Bounded from '@/components/containers/Bounded';
import TextblockContainer from '@/components/containers/project/TextblockContainer';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import TitleContainer from '@/components/containers/project/TitleContainer';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('dietrich_schwarz');

  return (
    <Bounded>
      <section className={styles.Main}>
        <section className={styles.UpperContainer}>
          <TitleContainer>
            <div className={styles.ImageContainer}>
              <PrismicNextImage field={page.data.biography_image} />
            </div>
          </TitleContainer>
          <div className={styles.InformationContainer}>
            <PrismicRichText field={page.data.title} />
            <PrismicRichText field={page.data.graduation} />
            <div className={styles.Container}>
              <PrismicRichText field={page.data.position} />
              <PrismicRichText field={page.data.minergie} />
              <PrismicRichText field={page.data.university} />
              <PrismicNextLink field={page.data.email} />
            </div>
          </div>
        </section>
        <div className={styles.LowerContainer}>
          <TextblockContainer>
            <SliceZone slices={page.data.slices} components={components} />
          </TextblockContainer>
        </div>
      </section>
    </Bounded>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('dietrich_schwarz');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
