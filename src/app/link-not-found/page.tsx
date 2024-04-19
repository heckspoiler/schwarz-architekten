import { Metadata } from 'next';
import { PrismicRichText, SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Bounded from '@/components/containers/Bounded';
import { PrismicNextLink } from '@prismicio/next';
import Arrow from '@/components/Arrow';
import styles from './NotFound.module.css';
import Link from 'next/link';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('link_not_found');

  return (
    <Bounded>
      <section className={styles.Main}>
        <PrismicRichText field={page.data.title} />
        <PrismicRichText field={page.data.description} />
        <Link href="/">
          <span className={styles.LinkSpan}>
            Zurück zur Homepage
            <Arrow />
          </span>
        </Link>
      </section>
    </Bounded>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('link_not_found');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
