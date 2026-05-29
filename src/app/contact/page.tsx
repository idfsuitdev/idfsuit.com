import type { Metadata } from 'next';
import { SiteNav, SiteFooter } from '../../components/SiteChrome';
import ContactForm from '../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | IDFSUIT Productions LLC',
  description: 'Get in touch with IDFSUIT Productions LLC in Austin, TX.',
};

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main className="container mx-auto section-padding">
        <h1 className="text-4xl font-bold mb-12">CONTACT US</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
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
      </main>
      <SiteFooter />
    </>
  );
}
