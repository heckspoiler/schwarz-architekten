import React from 'react';
import { createClient } from '@/prismicio';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import Image from 'next/image';

import styles from './Slide.module.css';

export async function Slide() {
  const client = createClient();

  const footer = await client.getSingle('footer');
  return <section className={styles.Main}></section>;
}
