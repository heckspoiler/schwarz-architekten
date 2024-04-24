import { Metadata } from 'next';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import Bounded from '@/components/containers/Bounded';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Image from 'next/image';
import TitleContainer from '@/components/containers/project/TitleContainer';
import styles from './Contact.module.css';
import TextblockContainer from '@/components/containers/project/TextblockContainer';
import mailImageSrc from 'public/icons/mail.svg';
import Arrow from '@/components/Arrow';
import { ImpressumButton } from '@/components/clientsided/contact/ImpressumButton';
import { Impressum } from '@/components/clientsided/contact/Impressum';
import Link from 'next/link';
import { Form } from '@/components/clientsided/contact/Form';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('contact');

  const defaultVariationSlices = page.data.slices.filter(
    (slice) => slice.variation === 'default'
  );
  const generalLinksVariationSlices = page.data.slices.filter(
    (slice) => slice.variation === 'generalLinks'
  );

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
        <TextblockContainer>
          <Form styles={styles} />
        </TextblockContainer>
      </section>
      <TextblockContainer>
        <div className={styles.Subtitle}>
          <PrismicRichText field={page.data.contact_subtitle} />
        </div>
        <div className={styles.Title}>
          <h3>Architektur</h3>
        </div>
        <section className={styles.LinksContainer}>
          <SliceZone slices={defaultVariationSlices} components={components} />
        </section>
        <div className={styles.Title}>
          <h3>Links</h3>
        </div>
        <section className={styles.LinksContainer}>
          <SliceZone
            slices={generalLinksVariationSlices}
            components={components}
          />
        </section>
        <div className={styles.Title}>
          <ImpressumButton />
        </div>
      </TextblockContainer>
      <Impressum />
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
