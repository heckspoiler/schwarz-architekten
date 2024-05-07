'use client';

import React, { useState, useEffect } from 'react';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';
import { usePathname } from 'next/navigation';

const HeaderClient = function ({
  navbar,
  styles,
}: {
  navbar: any;
  styles: any;
}) {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [isActive, setIsActive] = useState('');
  let mobileWidth = 1180;

  const pathname = usePathname();

  useEffect(() => {
    let activeLabel = '';
    if (pathname.startsWith('/projekte')) {
      activeLabel = 'Projekte';
    } else if (pathname.startsWith('/theorie')) {
      activeLabel = 'Theorie';
    } else if (pathname.startsWith('/uber-uns-2')) {
      activeLabel = 'Über uns';
    } else if (pathname.startsWith('/kontakt-2')) {
      activeLabel = 'Kontakt';
    } else if (pathname.startsWith('/news')) {
      activeLabel = 'News';
    } else if (pathname === '/') {
      activeLabel = '/';
    }
    setIsActive(activeLabel);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.Main}>
      {windowWidth !== null && windowWidth <= mobileWidth ? (
        <HeaderMobile navbar={navbar} styles={styles} isActive={isActive} />
      ) : (
        <HeaderDesktop navbar={navbar} styles={styles} isActive={isActive} />
      )}
    </header>
  );
};

export default HeaderClient;
