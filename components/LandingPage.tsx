// LandingPage.tsx
import React from 'react';
import styles from '../styles/LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.landingContainer}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a href="/" className={styles.logo}>MyLogo</a>
        </nav>
      </header>

      <main className={styles.introSection}>
        <h1 className={styles.introTitle}>Hi, I'm Isaiah McNealy</h1>
        <p className={styles.introSubtitle}>A passionate software engineer and machine learning enthusiast</p>
        <p className={styles.introText}>
          I build intelligent systems and elegant solutions to solve real-world problems. Explore my portfolio to see how I turn ideas into impactful products.
        </p>
        <a href="#contact" className={styles.ctaButton}>Get in Touch</a>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Isaiah McNealy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;