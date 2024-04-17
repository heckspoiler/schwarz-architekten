'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

import gsap from 'gsap';
import Link from 'next/link';

const HeaderMobile = ({
  navbar,
  styles,
  isActive,
}: {
  navbar: any;
  styles: any;
  isActive: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <section className={styles.Main}>
      <div className={styles.LogoContainer}>
        <Link href="/">
          <PrismicNextImage field={navbar.data.logo} />
        </Link>
      </div>
      <section
        className={`${styles.NavbarMobile} ${isOpen ? styles.IsOpen : ''}`}
      >
        <div className={styles.NavListMobileContainer}>
          <ul className={styles.NavListMobile}>
            <li
              key="/"
              className={`${styles.Item} ${isActive === '/' ? styles.IsActive : ''}`}
            >
              <p>01</p>
              <Link href="/" className={styles.Link}>
                Home
              </Link>
            </li>
            {navbar.data.navbar.map(
              (
                {
                  link,
                  label,
                  identifier,
                }: { link: any; label: string; identifier: string },
                index: number
              ) => (
                <li
                  key={identifier}
                  className={`${styles.Item} ${label === isActive ? styles.IsActive : ''}`}
                >
                  <p>{(index + 2).toString().padStart(2, '0')}</p>
                  <PrismicNextLink field={link} className={styles.Link}>
                    {label}
                  </PrismicNextLink>
                </li>
              )
            )}
            <div className={styles.LogoContainerMobile}>
              <div className={styles.LogoContainer}>
                <Link href="/">
                  <PrismicNextImage field={navbar.data.logo} />
                </Link>
              </div>
              <Link href="mailto:info@schwarz-architekten.com">
                info@schwarz-architekten.com
              </Link>
              <p>+41 (0) 44 389 10 60</p>
            </div>
          </ul>
        </div>
      </section>
      <div className={styles.HamburgerContainer} onClick={toggleOpen}>
        <button className={styles.Hamburger}>
          {[...Array(3)].map((_, index) => (
            <span
              key={index}
              className={`${styles.HamburgerLine} ${isOpen ? styles.Clicked : ''}`}
            ></span>
          ))}
        </button>
      </div>
    </section>
  );
};

export default HeaderMobile;
