import styles from './video-player.module.css';

interface VideoPlayerProps {
  src: string;
  poster: string;
  title?: string;
}

export default function VideoPlayer({ src, poster, title }: VideoPlayerProps) {
  return (
    <div className={styles.videoContainer}>
      <div className={styles.videoFrame}>
        <video
          className={styles.video}
          src={src}
          poster={poster}
          controls
          preload="metadata"
          playsInline
          aria-label={title}
        />
      </div>
    </div>
  );
}
