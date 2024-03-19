import React from 'react';
import { createClient } from '@/prismicio';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import Link from 'next/link';

export async function Header() {
  const client = createClient();

  const navbar = await client.getSingle('navbar');
  return (
    <header>
      <Link href="/">
        <PrismicNextImage field={navbar.data.logo} />
      </Link>
      <nav>
        <ul>
          {navbar.data.navbar.map(({ link, label }) => (
            <li key={label}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
