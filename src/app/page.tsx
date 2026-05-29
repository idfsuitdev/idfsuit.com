import Feed from '../components/Feed';
import feedData from '../data/feed.json';
import type { FeedData } from '../components/Feed/types';

export default function Home() {
  return <Feed data={feedData as FeedData} />;
}
