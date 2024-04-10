'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

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
        <a href="/">
          <PrismicNextImage field={navbar.data.logo} />
        </a>
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
              <a href="/" className={styles.Link}>
                Home
              </a>
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
                <a href="/">
                  <PrismicNextImage field={navbar.data.logo} />
                </a>
              </div>
              <a href="mailto:info@schwarz-architekten.com">
                info@schwarz-architekten.com
              </a>
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
