import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Bounded from '@/components/containers/Bounded';
import { Carousel } from '@/components/clientsided/home/HomeCarousel';

export interface ProjectData {
  id: string;
  url?: string;
  data: {
    project_index: [{ text: string }];
    project_title: [{ text: string }];
    project_subtitle: [{ text: string }];
    project_main_image: {
      alt: string;
      url: string;
    };
  };
}

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
  const fetchedProjects = await client.getAllByTag('homeslide');

  const projects = shuffleArray(fetchedProjects);

  return (
    <Bounded>
      {/* <SliceZone slices={page.data.slices} components={components} /> */}
      <Carousel projects={projects as unknown as ProjectData[]} />
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
