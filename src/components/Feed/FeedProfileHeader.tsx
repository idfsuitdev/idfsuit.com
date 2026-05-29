import type { FeedProfile } from './types';
import { formatCount } from './format';
import styles from './feed.module.css';

interface Props {
  profile: FeedProfile;
}

const FeedProfileHeader = ({ profile }: Props) => (
  <header className={styles.profile}>
    {profile.avatar && (
      <div className={styles.avatarRing}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={profile.avatar}
          alt={`${profile.username} profile picture`}
          className={styles.avatar}
          width={132}
          height={132}
        />
      </div>
    )}
    <div className={styles.profileMeta}>
      <div className={styles.profileTop}>
        <span className={styles.handle}>{profile.username}</span>
        <a
          className={styles.followBtn}
          href={profile.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          FOLLOW ON INSTAGRAM
        </a>
      </div>
      <div className={styles.stats}>
        <span>
          <strong>{formatCount(profile.mediaCount)}</strong> posts
        </span>
        <span>
          <strong>{formatCount(profile.followerCount)}</strong> followers
        </span>
        <span>
          <strong>{formatCount(profile.followingCount)}</strong> following
        </span>
      </div>
      <div className={styles.fullName}>{profile.fullName}</div>
      <p className={styles.bio}>{profile.biography}</p>
    </div>
  </header>
);

export default FeedProfileHeader;
