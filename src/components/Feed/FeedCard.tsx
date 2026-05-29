'use client';

import { useState } from 'react';
import type { FeedPost, FeedProfile } from './types';
import { formatCount, formatDate, segmentCaption } from './format';
import styles from './feed.module.css';

const CAPTION_CLAMP = 220;

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 21s-7.5-4.8-10.2-9.2C-0.3 8.2 1.6 4.5 5.2 4.5c2 0 3.4 1.1 4.3 2.5C10.4 5.6 11.8 4.5 13.8 4.5c3.6 0 5.5 3.7 3.4 7.3C19.5 16.2 12 21 12 21z" />
  </svg>
);

const CommentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.9-.9L3 21l1.9-5.6a8.5 8.5 0 0 1-.9-3.9A8.38 8.38 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z" />
  </svg>
);

const FilmIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" width={13} height={13}>
    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" />
  </svg>
);

const CarouselIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" width={13} height={13}>
    <rect x="7" y="7" width="11" height="11" rx="1" />
    <path d="M4 14V5a1 1 0 0 1 1-1h9" />
  </svg>
);

interface Props {
  post: FeedPost;
  profile: FeedProfile;
}

const FeedCard = ({ post, profile }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const postUrl = `https://instagram.com/p/${post.code}/`;

  const isLong = post.caption.length > CAPTION_CLAMP;
  const shown =
    expanded || !isLong ? post.caption : post.caption.slice(0, CAPTION_CLAMP).trimEnd();
  const segments = segmentCaption(shown);

  return (
    <article className={styles.card}>
      <div className={styles.cardHead}>
        {profile.avatar && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={profile.avatar} alt="" className={styles.cardAvatar} width={34} height={34} />
        )}
        <span className={styles.cardHandle}>{profile.username}</span>
        <span className={styles.cardDate}>{formatDate(post.takenAt)}</span>
      </div>

      <a
        className={styles.media}
        href={postUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View post on Instagram"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.img} alt={post.caption.slice(0, 80) || 'IDFSUIT post'} loading="lazy" />
        {post.mediaType === 2 && (
          <span className={styles.badge}>
            <FilmIcon /> REEL
          </span>
        )}
        {post.mediaType === 8 && (
          <span className={styles.badge}>
            <CarouselIcon /> ALBUM
          </span>
        )}
      </a>

      <div className={styles.cardBody}>
        <div className={styles.actions}>
          <span className={styles.action}>
            <span className={styles.likeIcon}>
              <HeartIcon />
            </span>
            {formatCount(post.likeCount)}
          </span>
          <span className={styles.action}>
            <CommentIcon />
            {formatCount(post.commentCount)}
          </span>
        </div>

        <p className={styles.caption}>
          <span className={styles.author}>{profile.username}</span>
          {segments.map((seg, idx) =>
            seg.kind === 'text' ? (
              <span key={idx}>{seg.text}</span>
            ) : (
              <span key={idx} className={seg.kind === 'tag' ? styles.tag : styles.mention}>
                {seg.text}
              </span>
            ),
          )}
          {isLong && !expanded && (
            <button className={styles.more} onClick={() => setExpanded(true)}>
              … more
            </button>
          )}
        </p>

        <a className={styles.viewOn} href={postUrl} target="_blank" rel="noopener noreferrer">
          VIEW ON INSTAGRAM →
        </a>
      </div>
    </article>
  );
};

export default FeedCard;
