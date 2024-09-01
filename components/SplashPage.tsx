// components/SplashPage.tsx
"use client";

import { useEffect, useState } from 'react';
import styles from '../styles/SplashPage.module.css';

const SplashPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set timeout to hide the splash screen after the animation
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 500); // Adjust duration to match the length of your animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.preloader} ${!isVisible && styles.hide}`}>
      <div className={styles.panelWrapper}>
        <img
          src="/images/name-logo-v1.svg"
          alt="Isaiah logo - white"
          className={styles.preloaderImg}
        />
        <div className={styles.panelLeft}></div>
        <div className={styles.panelRight}></div>
      </div>
    </div>
  );
};

export default SplashPage;