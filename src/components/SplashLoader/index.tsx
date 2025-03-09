'use client';

import { useEffect, useState } from 'react';
import styles from './splash-loader.module.css';

export default function SplashLoader({ onComplete }: { onComplete: () => void }) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Animation will complete after the SVG drawing animation finishes
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        onComplete();
      }, 500); // Fade out time
    }, 3000); // Total animation time

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`${styles.splashContainer} ${!isAnimating ? styles.fadeOut : ''}`}>
      <div className={styles.logoContainer}>
        <svg 
          className={styles.suitSvg} 
          width="200" 
          height="240" 
          viewBox="0 0 200 240" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Suit Outline */}
          <path 
            className={styles.drawPath}
            d="M100 10 
               L130 40 
               L130 200 
               L110 230 
               L90 230 
               L70 200 
               L70 40 
               L100 10z" 
            stroke="#f5f5f5" 
            strokeWidth="2" 
            fill="none" 
          />
          
          {/* Collar */}
          <path 
            className={`${styles.drawPath} ${styles.delaySmall}`}
            d="M85 40 
               L100 70 
               L115 40" 
            stroke="#f5f5f5" 
            strokeWidth="2" 
            fill="none" 
          />
          
          {/* Lapels */}
          <path 
            className={`${styles.drawPath} ${styles.delayMedium}`}
            d="M85 40 
               L75 80 
               L90 90" 
            stroke="#f5f5f5" 
            strokeWidth="2" 
            fill="none" 
          />
          
          <path 
            className={`${styles.drawPath} ${styles.delayMedium}`}
            d="M115 40 
               L125 80 
               L110 90" 
            stroke="#f5f5f5" 
            strokeWidth="2" 
            fill="none" 
          />
          
          {/* Buttons */}
          <circle 
            className={`${styles.drawPath} ${styles.delayLarge}`}
            cx="100" 
            cy="110" 
            r="5" 
            stroke="#ffd700" 
            strokeWidth="2" 
            fill="none" 
          />
          
          <circle 
            className={`${styles.drawPath} ${styles.delayLarge}`}
            cx="100" 
            cy="140" 
            r="5" 
            stroke="#ffd700" 
            strokeWidth="2" 
            fill="none" 
          />
          
          <circle 
            className={`${styles.drawPath} ${styles.delayLarge}`}
            cx="100" 
            cy="170" 
            r="5" 
            stroke="#ffd700" 
            strokeWidth="2" 
            fill="none" 
          />
          
          {/* Pocket */}
          <path 
            className={`${styles.drawPath} ${styles.delayExtraLarge}`}
            d="M80 160 
               L90 160 
               L90 175 
               L80 175 
               Z" 
            stroke="#f5f5f5" 
            strokeWidth="2" 
            fill="none" 
          />
          
          <path 
            className={`${styles.drawPath} ${styles.delayExtraLarge}`}
            d="M110 160 
               L120 160 
               L120 175 
               L110 175 
               Z" 
            stroke="#f5f5f5" 
            strokeWidth="2" 
            fill="none" 
          />
        </svg>
        
        <div className={`${styles.companyName} ${styles.delayExtraLarge}`}>
          IDFSUIT
        </div>
        <div className={`${styles.tagline} ${styles.delayExtraLarge}`}>
          PRODUCTIONS LLC
        </div>
      </div>
    </div>
  );
}