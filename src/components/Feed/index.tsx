'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import FeedStill from './FeedStill';
import type { FeedData, FeedItem } from './types';
import styles from './feed.module.css';

const BATCH = 4;

interface Props {
  data: FeedData;
}

/**
 * Production feed shown beneath the portfolio reel. Stills fade in as
 * they enter the viewport. The account has a finite set of posts, but
 * the brief calls for an endless scroll — once the real stills are
 * exhausted we keep cycling through them so the page never dead-ends.
 */
const Feed = ({ data }: Props) => {
  const { items } = data;
  const [count, setCount] = useState(Math.min(BATCH, items.length));
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(() => setCount((c) => c + BATCH), []);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore();
      },
      { rootMargin: '800px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [loadMore]);

  const visible: { item: FeedItem; key: string }[] = [];
  for (let n = 0; n < count; n++) {
    const cycle = Math.floor(n / items.length);
    const item = items[n % items.length];
    visible.push({ item, key: `${cycle}-${n % items.length}` });
  }

  return (
    <section id="feed" className={styles.feed}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>FROM THE SET</h2>
        <p className={styles.sub}>Field notes, casting calls, and moments from IDFSUIT productions.</p>
        <div className={styles.column}>
          {visible.map(({ item, key }) => (
            <FeedStill key={key} item={item} />
          ))}
        </div>
        <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />
        <div className={styles.loader} aria-hidden="true">
          <span className={styles.spinner} />
        </div>
      </div>
    </section>
  );
};

export default Feed;
