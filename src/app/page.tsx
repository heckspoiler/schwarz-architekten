import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Bounded from '@/components/containers/Bounded';
import { Carousel } from '@/components/clientsided/home/HomeCarousel';
import { ProjectSlideStore } from '@/stores/SliderStore';
import { ImageFieldImage } from '@prismicio/client';

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

  const logoLayover = await client.getByType('logo_layover');

  const overlay = logoLayover.results[0].data.logo_layover;

  const overlayText = await client.getByType('overlay_text');

  const overlayTextData = overlayText.results;

  return (
    <Bounded>
      <Carousel
        projects={projects as unknown as ProjectData[]}
        overlay={overlay as ImageFieldImage | null | undefined}
        overlayText={overlayTextData}
      />
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
