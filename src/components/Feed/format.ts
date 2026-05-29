// Small presentation helpers shared by the feed components.

const MONTHS = [
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
  'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER',
];

/** Compact count, IG-style: 1234 -> "1,234", 12345 -> "12.3K". */
export function formatCount(n: number): string {
  if (n < 1000) return String(n);
  if (n < 10000) return n.toLocaleString('en-US');
  if (n < 1_000_000) return `${(n / 1000).toFixed(n % 1000 >= 100 ? 1 : 0)}K`;
  return `${(n / 1_000_000).toFixed(1)}M`;
}

/** Unix seconds -> "MONTH D, YYYY" (UTC, deterministic for static export). */
export function formatDate(takenAtSeconds: number): string {
  if (!takenAtSeconds) return '';
  const d = new Date(takenAtSeconds * 1000);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

const TAG_OR_MENTION = /(^|\s)([#@][A-Za-z0-9._]+)/g;

/**
 * Split a caption into plain text and #hashtag / @mention tokens so the
 * card can render the tokens in the gold highlight colour. Returns an
 * array of { text, kind } segments preserving original order/whitespace.
 */
export interface CaptionSegment {
  text: string;
  kind: 'text' | 'tag' | 'mention';
}

export function segmentCaption(caption: string): CaptionSegment[] {
  const segments: CaptionSegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  TAG_OR_MENTION.lastIndex = 0;
  while ((match = TAG_OR_MENTION.exec(caption)) !== null) {
    const lead = match[1]; // captured leading whitespace / start
    const token = match[2];
    const tokenStart = match.index + lead.length;
    if (tokenStart > lastIndex) {
      segments.push({ text: caption.slice(lastIndex, tokenStart), kind: 'text' });
    }
    segments.push({
      text: token,
      kind: token.startsWith('#') ? 'tag' : 'mention',
    });
    lastIndex = tokenStart + token.length;
  }
  if (lastIndex < caption.length) {
    segments.push({ text: caption.slice(lastIndex), kind: 'text' });
  }
  return segments;
}
