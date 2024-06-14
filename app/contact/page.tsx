// app/contact/page.tsx
import Head from 'next/head';
import Contact from '../../components/Contact';
import styles from '../../styles/Contact.module.css';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Isaiah McNealy</title>
      </Head>
      <div className={styles.main}>
        <Contact />
      </div>
    </>
  );
}