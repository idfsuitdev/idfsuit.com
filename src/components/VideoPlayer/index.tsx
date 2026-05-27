'use client';

import { useRef, useState } from 'react';
import styles from './video-player.module.css';

interface VideoPlayerProps {
  src: string;
  poster: string;
  title?: string;
}

export default function VideoPlayer({ src, poster, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    setStarted(true);
    v.play().catch(() => setStarted(false));
  };

  return (
    <div className={styles.videoContainer}>
      <div className={styles.videoFrame}>
        <video
          ref={videoRef}
          className={styles.video}
          src={src}
          poster={poster}
          preload="metadata"
          controls={started}
          playsInline
          aria-label={title}
        />
        {!started && (
          <button
            type="button"
            className={styles.playOverlay}
            onClick={handlePlay}
            aria-label={`Play ${title ?? 'video'}`}
          >
            <svg width="88" height="62" viewBox="0 0 68 48" aria-hidden="true">
              <path
                className={styles.playButtonBg}
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                fill="#212121"
              />
              <path d="M 45,24 27,14 27,34" fill="#ffd700" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
