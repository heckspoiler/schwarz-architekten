import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Bounded from '@/components/containers/Bounded';
import TitleContainer from '@/components/containers/project/TitleContainer';

import styles from './Theory.module.css';
import TextblockContainer from '@/components/containers/project/TextblockContainer';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('theory');

  return (
    <Bounded>
      <TitleContainer>
        <div className={styles.TitleContainer}>
          <h1>{(page.data.theory_title[0] as any).text}</h1>
        </div>
      </TitleContainer>
      <TextblockContainer>
        <section className={styles.ContentContainer}>
          <div className={styles.Content}>
            <SliceZone slices={page.data.slices} components={components} />
          </div>
        </section>
      </TextblockContainer>
    </Bounded>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('theory');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
