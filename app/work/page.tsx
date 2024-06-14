// app/work/page.tsx
import Head from 'next/head';
import WorkHistory from '../../components/WorkHistory';
import styles from '../../styles/Work.module.css';

export default function Work() {
  return (
    <>
      <Head>
        <title>Work History - Isaiah McNealy</title>
      </Head>
      <div className={styles.main}>
        <WorkHistory />
      </div>
    </>
  );
}