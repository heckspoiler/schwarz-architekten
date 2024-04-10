import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Bounded from '@/components/containers/Bounded';
import TitleContainer from '@/components/containers/project/TitleContainer';
import styles from './Projects.module.css';
import { Carousel } from '@/components/clientsided/home/HomeCarousel';
import { ProjectsCarousel } from '@/components/clientsided/projects/ProjectsCarousel';
import { ProjectData } from '@/app/page';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('projects');
  const projects = await client.getAllByType('project');

  // return <SliceZone slices={page.data.slices} components={components} />;

  return (
    <Bounded>
      <TitleContainer>
        <h1 className={styles.Title}>Projekte</h1>
      </TitleContainer>
      <ProjectsCarousel
        projects={projects as unknown as ProjectData[]}
        styles={styles}
      />
    </Bounded>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('projects');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
