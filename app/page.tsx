// app/page.tsx
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Isaiah McNealy Portfolio</title>
        <meta name="description" content="Portfolio website of Isaiah McNealy" />
      </Head>
      <div className={styles.main}>
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my work, projects, and blog.</p>
      </div>
    </>
  );
}