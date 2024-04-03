import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Bounded from '@/components/containers/Bounded';
import { PrismicNextImage } from '@prismicio/next';
import styles from './Project.module.css';
import TitleContainer from '@/components/containers/project/TitleContainer';
import TextblockContainer from '@/components/containers/project/TextblockContainer';
import ImageGridContainer from '@/components/containers/project/ImageGridContainer';

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID('project', params.uid)
    .catch(() => notFound());

  return (
    <Bounded>
      <TitleContainer>
        <PrismicRichText field={page.data.project_index} />
        <div>
          <PrismicRichText field={page.data.project_title} />
          <PrismicRichText field={page.data.project_subtitle} />
        </div>
      </TitleContainer>
      <section className={styles.HeroImageSection}>
        <div className={styles.ImageContainer}>
          <PrismicNextImage field={page.data.project_main_image} />
        </div>
        <div className={styles.LegendContainer}>
          {page.data.project_image_legend.map((item, index) => (
            <div key={index}>
              <PrismicRichText
                field={page.data.project_image_legend[index].legend_title}
              />
              <PrismicRichText
                field={page.data.project_image_legend[index].legend_description}
              />
            </div>
          ))}
        </div>
      </section>
      <TextblockContainer>
        {page.data.project_description.map((item, index) => (
          <div key={index} className={styles.DescriptionContainer}>
            <div className={styles.DescriptionTitleContainer}>
              <PrismicRichText
                field={
                  page.data.project_description[index].project_description_title
                }
              />
            </div>
            <div className={styles.TextBlock}>
              <PrismicRichText
                field={
                  page.data.project_description[index]
                    .project_description_description
                }
              />
            </div>
          </div>
        ))}
      </TextblockContainer>
      <section className={styles.GallerySection}>
        <PrismicRichText field={page.data.gallery_title} />
        <ImageGridContainer>
          {page.data.project_image_gallery.map((item, index) => (
            <div key={index} className={styles.ImageGridItem}>
              <PrismicNextImage
                field={page.data.project_image_gallery[index].project_image}
              />
            </div>
          ))}
        </ImageGridContainer>
      </section>
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
    .getByUID('project', params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType('project');

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
