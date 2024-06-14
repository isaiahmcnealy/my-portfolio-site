// app/about/page.tsx
import Head from 'next/head';
import AboutMe from '../../components/AboutMe';
import styles from '../../styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About Me - Isaiah McNealy</title>
      </Head>
      <div className={styles.main}>
        <AboutMe />
      </div>
    </>
  );
}