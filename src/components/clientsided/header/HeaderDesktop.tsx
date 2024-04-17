'use client';

import React, { Suspense } from 'react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';

const HeaderDesktop = ({
  navbar,
  styles,
  isActive,
}: {
  navbar: any;
  styles: any;
  isActive: string;
}) => {
  return (
    <header className={styles.Main}>
      <div className={styles.LogoContainer}>
        <Link href="/">
          <PrismicNextImage field={navbar.data.logo} />
        </Link>
      </div>
      <nav className={styles.Navbar}>
        <ul className={styles.NavList}>
          {navbar.data.navbar.map(
            ({ link, label }: { link: any; label: string }) => (
              <li
                key={label}
                className={`${styles.Item} ${label === isActive ? styles.IsActive : ''}`}
              >
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
