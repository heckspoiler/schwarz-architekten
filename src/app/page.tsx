import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Projekte</h1>
      <a href="#">Jiremspjm</a>
    </main>
  );
}