// Shapes for the statically-exported Instagram feed data
// (generated from the ETL into src/data/feed.json).

export interface FeedProfile {
  username: string;
  fullName: string;
  biography: string;
  followerCount: number;
  followingCount: number;
  mediaCount: number;
  avatar: string | null;
  profileUrl: string;
}

// mediaType: 1 = photo, 2 = video/reel, 8 = carousel (matches IG's media_type)
export interface FeedPost {
  i: number;
  code: string;
  caption: string;
  likeCount: number;
  commentCount: number;
  takenAt: number;
  mediaType: number;
  width: number;
  height: number;
  img: string;
}

export interface FeedData {
  profile: FeedProfile;
  posts: FeedPost[];
}
