// components/Footer.tsx
import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p>© 2024 Isaiah McNealy. All rights reserved.</p>
    <div className={styles.socialLinks}>
      <a href="https://linkedin.com/in/isaiahmcnealy" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/isaiahmcnealy" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://twitter.com/isaiahmcnealy" target="_blank" rel="noopener noreferrer">Twitter</a>
    </div>
  </footer>
);

export default Footer;