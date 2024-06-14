// app/projects/page.tsx
import Head from 'next/head';
import Projects from '../../components/Projects';
import styles from '../../styles/Projects.module.css';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects - Isaiah McNealy</title>
      </Head>
      <div className={styles.main}>
        <Projects />
      </div>
    </>
  );
}