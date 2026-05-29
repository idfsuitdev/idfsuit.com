// Minimal feed item: an image and a clean English description of the
// event, plus a short date label. Generated into src/data/feed.json.

export interface FeedItem {
  img: string;
  description: string;
  date: string;
}

export interface FeedData {
  items: FeedItem[];
}
