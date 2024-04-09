'use client';

import React from 'react';
import { PrismicNextLink } from '@prismicio/next';
import { Logo } from '@/components/Logo';

const HeaderDesktop = ({ navbar, styles }: { navbar: any; styles: any }) => {
  return (
    <header className={styles.Main}>
      <Logo logo={navbar.data.logo} />
      <nav className={styles.Navbar}>
        <ul className={styles.NavList}>
          {navbar.data.navbar.map(
            ({ link, label }: { link: any; label: string }) => (
              <li key={label} className={styles.Item}>
                <PrismicNextLink field={link} className={styles.Link}>
                  {label}
                </PrismicNextLink>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDesktop;
