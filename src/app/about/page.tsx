import type { Metadata } from 'next';
import { SiteNav, SiteFooter } from '../../components/SiteChrome';

export const metadata: Metadata = {
  title: 'About | IDFSUIT Productions LLC',
  description:
    'IDFSUIT Productions LLC — Austin-based crime drama and urban underground sitcoms with a distinctive noir aesthetic.',
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="container mx-auto section-padding">
        <h1 className="text-4xl font-bold mb-12">ABOUT IDFSUIT</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl mb-6">
              IDFSUIT Productions LLC specializes in creating compelling crime dramas and urban
              underground sitcoms with a distinctive noir aesthetic.
            </p>
            <p className="text-xl mb-6">
              Our production focus combines gritty storytelling with sophisticated visual elements,
              creating a unique viewing experience.
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
      </main>
      <SiteFooter />
    </>
  );
}
