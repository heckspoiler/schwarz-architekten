import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Bounded from '@/components/containers/Bounded';
import { Carousel } from '@/components/clientsided/home/Carousel';
import styles from './page.module.css';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('home');
  const projects = await client.getAllByType('project');

  return (
    <Bounded>
      {/* <SliceZone slices={page.data.slices} components={components} /> */}
      <Carousel projects={projects} />
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
