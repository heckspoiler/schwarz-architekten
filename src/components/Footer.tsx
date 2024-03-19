import React from 'react';
import { createClient } from '@/prismicio';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import Link from 'next/link';

export async function Footer() {
  const client = createClient();

  const footer = await client.getSingle('settings');
  return <footer>FOOTER MOTHERFOOTER</footer>;
}
