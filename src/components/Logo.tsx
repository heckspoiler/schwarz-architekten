'use client';

import { PrismicNextImage } from '@prismicio/next';
import Link from 'next/link';
import * as prismic from '@prismicio/client';
import styles from './Logo.module.css';

export async function Logo({
  logo,
}: {
  logo: prismic.ImageFieldImage | null | undefined;
}) {
  return (
    <div className={styles.LogoContainer}>
      <Link href="/">
        <PrismicNextImage field={logo} className={styles.Logo} />
      </Link>
    </div>
  );
}
