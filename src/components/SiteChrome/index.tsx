import Link from 'next/link';
import SuitMark from '../SuitMark';
import styles from './site-chrome.module.css';

/** Shared sticky top nav. Brand returns home; links reach the
 *  About page and the Contact form (which sit off the infinite feed). */
export const SiteNav = () => (
  <nav className={styles.topbar}>
    <Link href="/" className={styles.brand}>
      <span className={styles.suit}>
        <SuitMark width={22} height={26} />
      </span>
      <span className={styles.brandName}>IDFSUIT</span>
    </Link>
    <div className={styles.nav}>
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
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
      </div>
    </div>
  </footer>
);
