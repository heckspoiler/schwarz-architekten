'use client';

import React from 'react';
import styles from './Impressum.module.css';
import Arrow from '@/components/Arrow';
import { ImpressumVisible } from '@/stores/ImpressumStores';
import Link from 'next/link';
import Image from 'next/image';

export const Impressum = () => {
  const { isVisible, setIsVisible } = ImpressumVisible() as {
    isVisible: boolean;
    setIsVisible: (value: boolean) => void;
  };

  return (
    <div
      className={`${styles.ImpressumContainer} ${isVisible ? styles.ImpressumVisible : ''}`}
    >
      <div className={styles.Impressum}>
        <div
          className={styles.CrossContainer}
          onClick={() => setIsVisible(false)}
        >
          <Arrow />
        </div>
        <h1>Impressum</h1>
        <div>
          <h3>Redaktion</h3>
          <p>Dietrich Schwarz Architekten AG</p>
        </div>
        <div>
          <h3>Web Design & Web Development</h3>
          <p>Carlo Ettisberger & Ozelot Studios GmbH</p>
          <div className={styles.LinkContainer}>
            <div className={styles.Link}>
              <Link href="https://ozelot.ltd/" target="_blank">
                Ozelot Studios
              </Link>
              <Arrow />
            </div>
            <div className={styles.Link}>
              <Link href="https://carlothedom.digital" target="_blank">
                Carlo Ettisberger
              </Link>
              <Arrow />
            </div>
          </div>
        </div>
        <div>
          <h3>Fotos</h3>
          <p>
            Die auf unserer Website verwendeten Fotos sind von verschiedenen
            Fotografen im Auftrag erstellt worden. Die Weiterverwendung der
            Fotos darf nur mit den entsprechend eingeholten Rechten erfolgen.
          </p>
        </div>
        <div>
          <h3>Verlinkte Websites</h3>
          <p>
            Die Dietrich Schwarz Architekten AG überprüft die Inhalte der
            verlinkten Websites nicht. Sie übernimmt somit keine Verantwortung
            für den Inhalt dieser Websites.
          </p>
        </div>
      </div>
      <div className={styles.LogoContainer}>
        <Image
          height={15}
          width={160}
          alt="SA LOGO"
          src="/images/SA_logo_pngreal.png"
        />
      </div>
    </div>
  );
};
