'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SuitMark from '../SuitMark';
import FeedProfileHeader from './FeedProfileHeader';
import FeedCard from './FeedCard';
import type { FeedData, FeedPost } from './types';
import styles from './feed.module.css';

const BATCH = 6;

interface Props {
  data: FeedData;
}

/**
 * Primary landing view: IG-style single-column feed.
 *
 * The account has a finite 53 posts, but the brief calls for an
 * "infinite scroll" feel. We reveal posts in batches via an
 * IntersectionObserver and, once the real posts are exhausted, keep
 * cycling through them so the scroll never dead-ends. Each rendered
 * card carries a unique key (cycle * len + index) so React keeps the
 * list stable across cycles.
 */
const Feed = ({ data }: Props) => {
  const { profile, posts } = data;
  const [count, setCount] = useState(Math.min(BATCH, posts.length));
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(() => {
    setCount((c) => c + BATCH);
  }, []);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore();
      },
      { rootMargin: '600px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [loadMore]);

  // Build the visible list, cycling through posts for the infinite feel.
  const visible: { post: FeedPost; key: string }[] = [];
  for (let n = 0; n < count; n++) {
    const post = posts[n % posts.length];
    const cycle = Math.floor(n / posts.length);
    visible.push({ post, key: `${cycle}-${post.i}` });
  }

  return (
    <div className={styles.page}>
      <nav className={styles.topbar}>
        <Link href="/" className={styles.brand}>
          <span className={styles.suit}>
            <SuitMark width={24} height={29} />
          </span>
          <span className={styles.brandName}>IDFSUIT</span>
        </Link>
        <div className={styles.nav}>
          <Link href="/work">WORK</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
      </nav>

      <FeedProfileHeader profile={profile} />

      <div className={styles.feedLabel}>▦ FEED</div>

      <main className={styles.feed}>
        {visible.map(({ post, key }) => (
          <FeedCard key={key} post={post} profile={profile} />
        ))}
      </main>

      <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />
      <div className={styles.loader} aria-hidden="true">
        <span className={styles.spinner} /> LOADING MORE
      </div>
    </div>
  );
};

export default Feed;
