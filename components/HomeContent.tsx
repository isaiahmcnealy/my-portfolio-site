// HomeContent.tsx
import React from 'react';
import styles from '../styles/HomeContent.module.css';

const HomeContent = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a href="/" className={styles.logo}>MyLogo</a>
          <div className={styles.navLinks}>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#projects" className={styles.navLink}>Projects</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </div>
        </nav>
      </header>

      <main className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Welcome to My Portfolio</h1>
        <p className={styles.heroSubtitle}>Crafting elegant solutions with modern technologies</p>
        <a href="#projects" className={styles.ctaButton}>View My Work</a>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 My Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomeContent;