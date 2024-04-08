import { createClient } from '@/prismicio';
import { HeaderClient } from './clientsided/header/HeaderClient';
import styles from './Header.module.css';
import { Suspense } from 'react';

export async function Header() {
  const client = createClient();
  const navbar = await client.getSingle('navbar');
  return (
    <section className={styles.HeaderContainer}>
      <Suspense fallback={<div></div>}>
        <HeaderClient navbar={navbar} styles={styles} />
      </Suspense>
    </section>
  );
}
