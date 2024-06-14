// app/blog/page.tsx
import Head from 'next/head';
import Blog from '../../components/Blog';
import styles from '../../styles/Blog.module.css';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog - Isaiah McNealy</title>
      </Head>
      <div className={styles.main}>
        <Blog />
      </div>
    </>
  );
}