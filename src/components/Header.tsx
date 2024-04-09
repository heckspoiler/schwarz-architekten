import { createClient } from '@/prismicio';
import HeaderClient from './clientsided/header/HeaderClient';
import styles from './Header.module.css';

export async function Header() {
  const client = createClient();
  const navbar = await client.getSingle('navbar');

  return (
    <section className={styles.HeaderContainer}>
      {/* <HeaderClient navbar={navbar} styles={styles} /> */}
    </section>
  );
}
