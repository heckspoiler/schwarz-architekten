import React from 'react';
import { createClient } from '@/prismicio';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import Link from 'next/link';

import styles from './Header.module.css';

export async function Header() {
  const client = createClient();

  const navbar = await client.getSingle('navbar');
  return (
    <header className={styles.Main}>
      <div className={styles.LogoContainer}>
        <Link href="/">
          <PrismicNextImage field={navbar.data.logo} className={styles.Logo} />
        </Link>
      </div>
      <nav className={styles.Navbar}>
        <ul className={styles.NavList}>
          {navbar.data.navbar.map(({ link, label }) => (
            <li key={label} className={styles.Item}>
              <PrismicNextLink field={link} className={styles.Link}>
                {label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}