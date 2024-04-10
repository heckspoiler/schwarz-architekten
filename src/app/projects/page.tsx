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

function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('projects');
  const fetchedProjects = await client.getAllByType('project');

  const projects = shuffleArray(fetchedProjects);

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
