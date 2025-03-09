'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './video-player.module.css';

interface VideoPlayerProps {
  driveId: string;
  title?: string;
}

export default function VideoPlayer({ driveId, title }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Direct video URL from Google Drive
  const videoUrl = `https://drive.google.com/file/d/${driveId}/preview`;
  
  // Handle loading state
  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('loadeddata', handleVideoLoaded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', handleVideoLoaded);
      }
    };
  }, []);

  return (
    <div className={styles.videoContainer}>
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingSpinner}></div>
        </div>
      )}
      <iframe
        src={videoUrl}
        className={styles.videoPlayer}
        allowFullScreen
        title={title || "IDFSUIT Productions Video"}
        allow="autoplay"
      />
    </div>
  );
}