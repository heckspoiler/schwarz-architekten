import React from 'react';
import { createClient } from '@/prismicio';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import { Logo } from '@/components/Logo';
import styles from './Header.module.css';

export async function Header() {
  const client = createClient();
  const navbar = await client.getSingle('navbar');

  return (
    <header className={styles.Main}>
      <Logo logo={navbar.data.logo} />
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

        <ul className={styles.NavListMobile}>
          {navbar.data.navbar.map(({ link, label }) => (
            <li key={label} className={styles.Item}>
              <PrismicNextLink field={link} className={styles.Link}>
                {label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.HamburgerContainer}>
        <button className={styles.Hamburger}>
          <span className={styles.HamburgerLine}></span>
          <span className={styles.HamburgerLine}></span>
          <span className={styles.HamburgerLine}></span>
        </button>
      </div>
    </header>
  );
}
