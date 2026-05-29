'use client';

import { useEffect, useRef, useState } from 'react';
import type { FeedItem } from './types';
import styles from './feed.module.css';

interface Props {
  item: FeedItem;
}

/** A single feed still: image + date + description, fading in on scroll. */
const FeedStill = ({ item }: Props) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={ref} className={`${styles.still} ${visible ? styles.visible : ''}`}>
      <div className={styles.frame}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.img} alt={item.description.slice(0, 80) || 'IDFSUIT still'} loading="lazy" />
      </div>
      {(item.date || item.description) && (
        <div className={styles.caption}>
          {item.date && <span className={styles.date}>{item.date}</span>}
          {item.description && <p className={styles.desc}>{item.description}</p>}
        </div>
      )}
    </article>
  );
};

export default FeedStill;
