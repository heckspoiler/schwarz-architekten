import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Bounded from '@/components/containers/Bounded';
import TitleContainer from '@/components/containers/project/TitleContainer';
import styles from './Projects.module.css';
import { ProjectsCarousel } from '@/components/clientsided/projects/ProjectsCarousel';
import { ProjectsRender } from '@/components/clientsided/projects/ProjectsRender';
import { ProjectsGrid } from '@/components/clientsided/projects/ProjectsGrid';
import { ProjectsSwitch } from '@/components/clientsided/projects/ProjectsSwitch';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('projects');
  const fetchedProjects = await client.getAllByType('project');

  const projects = fetchedProjects.sort((a, b) => {
    let aIndex = parseInt((a.data.project_index as any)[0].text, 10);
    let bIndex = parseInt((b.data.project_index as any)[0].text, 10);
    return bIndex - aIndex;
  });

  // return <SliceZone slices={page.data.slices} components={components} />;

  return (
    <Bounded>
      <section className={styles.UpperContainer}>
        <TitleContainer>
          <h1 className={styles.Title}>Projekte</h1>
        </TitleContainer>
        <ProjectsSwitch />
      </section>
      <ProjectsRender projects={projects} />
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
