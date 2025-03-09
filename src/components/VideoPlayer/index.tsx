'use client';

import { useState } from 'react';
import styles from './video-player.module.css';

interface VideoPlayerProps {
  driveId: string;
  title?: string;
}

export default function VideoPlayer({ driveId, title }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Instead of using an iframe, we'll create a thumbnail with a play button
  // that opens the video in a new tab when clicked
  const thumbnailUrl = `https://drive.google.com/thumbnail?id=${driveId}&sz=w1000`;
  const videoUrl = `https://drive.google.com/file/d/${driveId}/view`;
  
  // Handle image load
  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  // Handle play button click
  const handlePlayClick = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className={styles.videoContainer}>
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingSpinner}></div>
        </div>
      )}
      <div
        className={styles.thumbnailContainer}
        onClick={handlePlayClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handlePlayClick();
          }
        }}
        aria-label={`Play ${title || "IDFSUIT Productions Video"}`}
      >
        <img
          src={thumbnailUrl}
          alt={title || "IDFSUIT Productions Video"}
          className={styles.thumbnail}
          onLoad={handleImageLoaded}
        />
        <div className={styles.playButton}>
          <svg width="68" height="48" viewBox="0 0 68 48">
            <path
              className={styles.playButtonBg}
              d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
              fill="#212121"
            />
            <path d="M 45,24 27,14 27,34" fill="#ffd700" />
          </svg>
        </div>
      </div>
      <div className={styles.videoInfo}>
        <p className={styles.videoCaption}>
          Click to watch on Google Drive
        </p>
      </div>
    </div>
  );
}