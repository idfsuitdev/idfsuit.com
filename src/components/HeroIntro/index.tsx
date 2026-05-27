'use client';

import { useEffect, useState } from 'react';
import SuitMark from '../SuitMark';
import styles from './hero-intro.module.css';

interface TargetRect {
  cx: number;
  cy: number;
  width: number;
}

interface HeroIntroProps {
  target: TargetRect | null;
  onDone: () => void;
}

const DRAW_MS = 2500;
const SETTLE_MS = 1200;

type Phase = 'draw' | 'settle' | 'done';

export default function HeroIntro({ target, onDone }: HeroIntroProps) {
  const [phase, setPhase] = useState<Phase>('draw');

  useEffect(() => {
    if (!target) return;
    const t1 = window.setTimeout(() => setPhase('settle'), DRAW_MS);
    const t2 = window.setTimeout(() => {
      setPhase('done');
      onDone();
    }, DRAW_MS + SETTLE_MS);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [target, onDone]);

  if (phase === 'done' || !target) return null;

  const vw = typeof window !== 'undefined' ? window.innerWidth : 1440;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 900;
  const dx = target.cx - vw / 2;
  const dy = target.cy - vh / 2;
  const finalScale = target.width / 200;

  const transform =
    phase === 'draw'
      ? 'translate(-50%, -50%) scale(1.4)'
      : `translate(-50%, -50%) translate(${dx}px, ${dy}px) scale(${finalScale})`;

  return (
    <>
      <div className={`${styles.backdrop} ${phase === 'settle' ? styles.fadeOut : ''}`} />
      <div className={styles.overlaySlot} style={{ transform }}>
        <SuitMark width={200} height={240} animated />
      </div>
    </>
  );
}
