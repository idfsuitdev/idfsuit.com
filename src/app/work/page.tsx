import type { Metadata } from 'next';
import { SiteNav, SiteFooter } from '../../components/SiteChrome';
import VideoPlayer from '../../components/VideoPlayer';

export const metadata: Metadata = {
  title: 'Work | IDFSUIT Productions LLC',
  description:
    'Productions from IDFSUIT Productions LLC — crime drama and urban underground sitcoms with a noir aesthetic.',
};

export default function WorkPage() {
  return (
    <>
      <SiteNav />
      <main className="container mx-auto section-padding">
        <h1 className="text-4xl font-bold mb-12">OUR WORK</h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-background-secondary p-6 noir-shadow">
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
              both worlds makes him invaluable, but also puts him in constant danger as he balances
              his professional ethics with loyalty to his clients.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
