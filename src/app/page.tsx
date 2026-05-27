'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import HeroIntro from '../components/HeroIntro';
import SuitMark from '../components/SuitMark';
import VideoPlayer from '../components/VideoPlayer';

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
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 pb-8 min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto">
        <h1 className="mb-6 text-center">
          <span className="block text-6xl md:text-8xl font-bold tracking-wider">IDFSUIT</span>
          <span className="block text-2xl md:text-3xl tracking-widest mt-2 text-text-secondary">PRODUCTIONS LLC</span>
        </h1>
        <div
          ref={markRef}
          className="flex justify-center mb-6"
          style={{ visibility: suitVisible ? 'visible' : 'hidden' }}
        >
          <SuitMark width={INLINE_SUIT_WIDTH} height={INLINE_SUIT_HEIGHT} />
        </div>
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xl md:text-2xl mb-2 text-text-secondary font-light tracking-wide">
            <span className="text-highlight">Austin-native</span> noir & experimental media
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
            Lorenzo, a key asset to the underground as an attorney with many connections to the organized world,
            navigates the dangerous line between law and crime. His expertise in both worlds makes him invaluable,
            but also puts him in constant danger as he balances his professional ethics with loyalty to his clients.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12">ABOUT IDFSUIT</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xl mb-6">
            IDFSUIT Productions LLC specializes in creating compelling crime dramas and urban underground sitcoms with a distinctive noir aesthetic.
          </p>
          <p className="text-xl mb-6">
            Our production focus combines gritty storytelling with sophisticated visual elements, creating a unique viewing experience.
          </p>
          <p className="text-xl">
            Based in Austin, TX, we bring urban underground expertise to every production.
          </p>
        </div>
        <div className="relative h-96 noir-shadow overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/about-still.jpg"
            alt="Still from The Lawyer Unhinged"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState('');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    try {
      setFormStatus('submitting');
      const response = await fetch('https://formspree.io/f/xanewrnn', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };
  
  return (
    <section id="contact" className="section-padding bg-background-secondary">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12">CONTACT US</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            {formStatus === 'success' ? (
              <div className="bg-background-primary p-8 border border-highlight text-center">
                <h3 className="text-2xl font-bold mb-4 text-highlight">Message Sent!</h3>
                <p className="mb-6">Thank you for contacting IDFSUIT Productions LLC. We&apos;ll be in touch soon.</p>
                <button
                  onClick={() => setFormStatus('')}
                  className="bg-accent hover:bg-highlight hover:text-background-primary text-text-primary px-8 py-3 transition-colors duration-300"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 bg-background-primary border border-gray-700 text-text-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 bg-background-primary border border-gray-700 text-text-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full p-3 bg-background-primary border border-gray-700 text-text-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full p-3 bg-background-primary border border-gray-700 text-text-primary"
                    required
                  ></textarea>
                </div>
                {formStatus === 'error' && (
                  <div className="text-accent">
                    There was an error sending your message. Please try again.
                  </div>
                )}
                <button
                  type="submit"
                  className="bg-accent hover:bg-highlight hover:text-background-primary text-text-primary px-8 py-3 transition-colors duration-300"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            )}
          </div>
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">IDFSUIT Productions LLC</h3>
              <p className="mb-2">3571 Far West Blvd</p>
              <p className="mb-2">PMB3222</p>
              <p className="mb-2">Austin, TX 78731</p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="mb-2">Tel: +1-512-522-2822</p>
              <p className="mb-2">Fax: +1-737-787-2528</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-background-primary py-8 border-t border-gray-800">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-text-secondary">© 2025 IDFSUIT Productions LLC. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <Link href="/privacy-policy" className="text-text-secondary hover:text-highlight">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-text-secondary hover:text-highlight">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
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
      // The wrapper is full-width (flex container); only the SVG inside
      // has the real footprint. Use the SVG itself for the centre point.
      const svg = el.querySelector('svg');
      const rect = (svg ?? el).getBoundingClientRect();
      setTarget({
        cx: rect.left + rect.width / 2,
        cy: rect.top + rect.height / 2,
      });
    };
    measure();
    const onResize = () => measure();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      {!introDone && <HeroIntro target={target} onDone={() => setIntroDone(true)} />}
      <HeroSection markRef={markRef} suitVisible={introDone} />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
