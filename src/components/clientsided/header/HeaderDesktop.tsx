'use client';

import React, { Suspense } from 'react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { Logo } from '@/components/Logo';

const HeaderDesktop = ({ navbar, styles }: { navbar: any; styles: any }) => {
  return (
    <header className={styles.Main}>
      <div className={styles.LogoContainer}>
        <a href="/">
          <PrismicNextImage field={navbar.data.logo} />
        </a>
      </div>
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
