'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { PrismicNextLink } from '@prismicio/next';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/Logo';

const HeaderMobile = ({ navbar, styles }: { navbar: any; styles: any }) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <section className={styles.Main}>
      <Logo logo={navbar.data.logo} />
      <section
        className={`${styles.NavbarMobile} ${isOpen ? styles.IsOpen : ''}`}
      >
        <div className={styles.NavListMobileContainer}>
          <ul className={styles.NavListMobile}>
            <li
              key="/"
              className={`${styles.Item} ${isActive ? styles.isActive : ''}`}
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
                <li key={identifier} className={styles.Item}>
                  <p>{(index + 2).toString().padStart(2, '0')}</p>
                  <PrismicNextLink field={link} className={styles.Link}>
                    {label}
                  </PrismicNextLink>
                </li>
              )
            )}
            <div className={styles.LogoContainerMobile}>
              <Logo logo={navbar.data.logo} />
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
          <span className={styles.HamburgerLine}></span>
          <span className={styles.HamburgerLine}></span>
          <span className={styles.HamburgerLine}></span>
        </button>
      </div>
    </section>
  );
};

export default HeaderMobile;
