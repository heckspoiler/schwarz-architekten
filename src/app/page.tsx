import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Bounded from '@/components/containers/Bounded';
import styles from './page.module.css';
import Arrow from '@/components/Arrow';
import TitleContainer from '@/components/containers/project/TitleContainer';
import { PrismicNextImage } from '@prismicio/next';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('home');
  const projects = await client.getAllByType('project');

  return (
    <Bounded>
      {/* <SliceZone slices={page.data.slices} components={components} /> */}
      <section className={styles.Carousel}>
        {projects.map((project) => (
          <section key={project.id} className={styles.SlideContainer}>
            <TitleContainer key={project.id}>
              <p className={styles.ProjectIndex}>
                {project.data.project_index[0]?.text}
              </p>
              <div>
                <h1>{project.data.project_title[0]?.text}</h1>
                <p>{project.data.project_subtitle[0]?.text}</p>
                <a href={project.url ?? '#'} className={styles.Anchor}>
                  Mehr sehen
                  <span>
                    <Arrow height={8} width={8} />
                  </span>
                </a>
              </div>
            </TitleContainer>
            <div className={styles.ImageContainer}>
              <PrismicNextImage
                field={project.data.project_main_image}
                key={project.id}
                alt={project.data.project_main_image.alt ?? ''}
              />
            </div>
          </section>
        ))}
      </section>
    </Bounded>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('home');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
