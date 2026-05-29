'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import HeroIntro from '../components/HeroIntro';
import SuitMark from '../components/SuitMark';
import VideoPlayer from '../components/VideoPlayer';
import Feed from '../components/Feed';
import { SiteNav, SiteFooter } from '../components/SiteChrome';
import feedData from '../data/feed.json';
import type { FeedData } from '../components/Feed/types';

const INLINE_SUIT_WIDTH = 120;
const INLINE_SUIT_HEIGHT = 144;

const HeroSection = ({
  markRef,
  suitVisible,
}: {
  markRef: React.RefObject<HTMLDivElement | null>;
  suitVisible: boolean;
}) => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-16 pb-8 min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto">
        <div
          ref={markRef}
          className="flex justify-center mb-6"
          style={{ visibility: suitVisible ? 'visible' : 'hidden' }}
        >
          <SuitMark width={INLINE_SUIT_WIDTH} height={INLINE_SUIT_HEIGHT} />
        </div>
        <h1 className="mb-6 text-center">
          <span className="block text-6xl md:text-8xl font-bold tracking-wider">IDFSUIT</span>
          <span className="block text-2xl md:text-3xl tracking-widest mt-2 text-text-secondary">
            PRODUCTIONS LLC
          </span>
        </h1>
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xl md:text-2xl mb-2 text-text-secondary font-light tracking-wide">
            <span className="text-highlight">Austin-native</span> noir &amp; experimental media
          </p>
          <p className="text-xl md:text-2xl mb-4 text-text-secondary">
            Crime drama, urban sitcoms, and more
          </p>
        </div>
        <div className="text-center">
          <button
            className="bg-background-secondary hover:bg-accent text-text-primary px-8 py-3 border border-highlight transition-colors duration-300"
            onClick={scrollToPortfolio}
          >
            VIEW OUR WORK
          </button>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => (
  <section id="portfolio" className="pt-0 pb-16 bg-background-secondary">
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="bg-background-primary p-6 noir-shadow">
          <VideoPlayer
            src="https://cdn.subfrost.io/media/the-lawyer-unhinged.mp4"
            poster="/the-lawyer-unhinged-poster.jpg"
            title="The Lawyer Unhinged (2025)"
          />
          <h3 className="text-2xl font-bold mt-6 mb-2">The Lawyer Unhinged (2025)</h3>
          <p className="text-text-secondary mb-4">Crime Drama • 2025</p>
          <p className="text-text-secondary mb-6">
            Lorenzo, a key asset to the underground as an attorney with many connections to the
            organized world, navigates the dangerous line between law and crime. His expertise in
            both worlds makes him invaluable, but also puts him in constant danger as he balances his
            professional ethics with loyalty to his clients.
          </p>
        </div>
      </div>
    </div>
  </section>
);

interface SuitTarget {
  cx: number;
  cy: number;
}

export default function Home() {
  const markRef = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState<SuitTarget | null>(null);
  const [introDone, setIntroDone] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      const el = markRef.current;
      if (!el) return;
      const svg = el.querySelector('svg');
      const rect = (svg ?? el).getBoundingClientRect();
      setTarget({ cx: rect.left + rect.width / 2, cy: rect.top + rect.height / 2 });
    };
    measure();
    const onResize = () => measure();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      {!introDone && <HeroIntro target={target} onDone={() => setIntroDone(true)} />}
      <SiteNav />
      <HeroSection markRef={markRef} suitVisible={introDone} />
      <PortfolioSection />
      <Feed data={feedData as FeedData} />
      <SiteFooter />
    </>
  );
}
