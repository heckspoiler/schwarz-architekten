import React from 'react';
import { createClient } from '@/prismicio';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import Link from 'next/link';

export async function Header() {
  const client = createClient();

  const settingsMeta = await client.getSingle('settings');

  return (
    <header>
      <Link href="https://www.google.com">
        <PrismicNextImage
          field={settingsMeta.data.schwarz_architekten_logo}
        ></PrismicNextImage>
      </Link>

      <nav>
        <ul>
          {settingsMeta.data.navigation.map(({ link, label }) => (
            <li key={label}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
