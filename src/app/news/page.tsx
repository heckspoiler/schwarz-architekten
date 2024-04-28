import { Metadata } from 'next';
import { PrismicRichText, SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Bounded from '@/components/containers/Bounded';
import TitleContainer from '@/components/containers/project/TitleContainer';
import styles from './News.module.css';
import { ImageFieldImage } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import Link from 'next/link';
import Arrow from '@/components/Arrow';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('news');
  const fetchedArticles = await client.getAllByType('newsarticle');

  const articles = fetchedArticles.sort((a, b) => {
    let aIndex = parseInt((a.data.article_index as any)[0].text, 10);
    let bIndex = parseInt((b.data.article_index as any)[0].text, 10);
    return bIndex - aIndex;
  });

  return (
    <Bounded>
      <TitleContainer>
        <div className={styles.TitleContainer}>
          <PrismicRichText field={page.data.title} />
        </div>
      </TitleContainer>
      <section className={styles.NewsGridContainer}>
        <div className={styles.GridContainer}>
          {articles.map((article, key) => (
            <div key={article.id} className={styles.GridItemContainer}>
              <div className={styles.GridItem}>
                <div className={styles.ImageContainer}>
                  <Link href={article.url ?? '#'}>
                    <PrismicNextImage
                      field={article.data.article_image as ImageFieldImage}
                    />
                  </Link>
                </div>
              </div>
              <div className={styles.ArticleInfo}>
                <div className={styles.ArticleBlaBla}>
                  <div className={styles.IndexContainer}>
                    <PrismicRichText field={article.data.article_index} />
                  </div>
                  <div className={styles.LowerContainer}>
                    <PrismicRichText field={article.data.article_title} />

                    <a href={article.url ?? '#'} className={styles.Anchor}>
                      Mehr sehen
                      <span>
                        <Arrow />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Bounded>
  );
}

{
  /* <SliceZone slices={page.data.slices} components={components} /> */
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('news');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
