import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import styles from './Newsarticle.module.css';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Bounded from '@/components/containers/Bounded';
import TitleContainer from '@/components/containers/project/TitleContainer';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import TextblockContainer from '@/components/containers/project/TextblockContainer';
import Arrow from '@/components/Arrow';

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID('newsarticle', params.uid)
    .catch(() => notFound());

  return (
    <Bounded>
      <TitleContainer>
        <div className={styles.HeadingContainer}>
          <div className={styles.IndexContainer}>
            <PrismicRichText field={page.data.article_index} />
          </div>
          <div>
            <PrismicRichText field={page.data.article_title} />
            <div className={styles.LegendContainer}>
              <PrismicRichText field={page.data.author_field} /> |
              <PrismicRichText field={page.data.date_field} /> |
              <PrismicRichText field={page.data.type_field} />
            </div>
          </div>
        </div>
      </TitleContainer>
      <div className={styles.ImageContainer}>
        <PrismicNextImage field={page.data.article_image} />
      </div>
      <TextblockContainer>
        <div className={styles.Description}>
          <SliceZone slices={page.data.slices} components={components} />
        </div>
        <div className={styles.LinksContainer}>
          {(page.data.project_link as any)?.url &&
            (page.data.project_link as any).length !== 0 && (
              <div className={styles.LinkContainer}>
                <PrismicNextLink field={page.data.project_link}>
                  Mehr zum Projekt
                  <span>
                    <Arrow />
                  </span>
                </PrismicNextLink>
              </div>
            )}
          <div className={styles.LinkContainer}>
            <PrismicNextLink field={page.data.other_link} target="_blank">
              Mehr Infos zum Artikel
              <span>
                <Arrow />
              </span>
            </PrismicNextLink>
          </div>
        </div>
      </TextblockContainer>
    </Bounded>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID('newsarticle', params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType('newsarticle');

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
