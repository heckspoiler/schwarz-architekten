import React from 'react';
import { createClient } from '@/prismicio';
import { FooterClient } from './clientsided/footer/FooterClient';

import styles from './Footer.module.css';

export async function Footer() {
  const client = createClient();

  const footer = await client.getSingle('footer');

  return (
    <section className={styles.FooterContainer}>
      <FooterClient footer={footer} styles={styles} />
    </section>
  );
}
