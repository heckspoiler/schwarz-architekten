'use client';

import React, { useState, useEffect } from 'react';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

const HeaderClient = function ({
  navbar,
  styles,
}: {
  navbar: any;
  styles: any;
}) {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

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
      {windowWidth !== null && windowWidth <= 768 ? (
        <HeaderMobile navbar={navbar} styles={styles} />
      ) : (
        <HeaderDesktop navbar={navbar} styles={styles} />
      )}
    </header>
  );
};

export default HeaderClient;
