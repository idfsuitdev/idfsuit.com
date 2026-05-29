import Link from 'next/link';
import SuitMark from '../SuitMark';
import styles from './site-chrome.module.css';

/** Shared sticky nav for the non-feed routes (/work, /about, /contact). */
export const SiteNav = () => (
  <nav className={styles.topbar}>
    <Link href="/" className={styles.brand}>
      <span className={styles.suit}>
        <SuitMark width={24} height={29} />
      </span>
      <span className={styles.brandName}>IDFSUIT</span>
    </Link>
    <div className={styles.nav}>
      <Link href="/">FEED</Link>
      <Link href="/work">WORK</Link>
      <Link href="/about">ABOUT</Link>
      <Link href="/contact">CONTACT</Link>
    </div>
  </nav>
);

export const SiteFooter = () => (
  <footer className={styles.footer}>
    <div className={styles.footerInner}>
      <p className={styles.copy}>© 2025 IDFSUIT Productions LLC. All rights reserved.</p>
      <div className={styles.footerLinks}>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
      </div>
    </div>
  </footer>
);
