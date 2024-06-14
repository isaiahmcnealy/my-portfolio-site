// components/Header.tsx
import Link from 'next/link';
import styles from '../../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Me</Link></li>
        <li><Link href="/work">Work History</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;