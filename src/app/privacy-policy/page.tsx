'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="bg-background-primary min-h-screen">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="inline-block mb-8 text-text-secondary hover:text-highlight transition-colors"
        >
          &larr; Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-text-secondary mb-6">
            Last Updated: March 9, 2025
          </p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="mb-4">
              IDFSUIT Productions LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website (our &quot;Website&quot;) and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We collect several types of information from and about users of our Website, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Personal Information:</strong> Information by which you may be personally identified, such as name, email address, telephone number, or any other identifier by which you may be contacted online or offline when you provide it to us through our contact form.
              </li>
              <li className="mb-2">
                <strong>Usage Information:</strong> Information about your connection to our Website, including your IP address, browser type, operating system, the pages you visit, the time and date of your visit, and other usage data.
              </li>
              <li className="mb-2">
                <strong>Cookies and Tracking Technologies:</strong> We may use cookies and similar tracking technologies to track activity on our Website and hold certain information to enhance your experience.
              </li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">To present our Website and its contents to you.</li>
              <li className="mb-2">To respond to your inquiries and fulfill any requests you make.</li>
              <li className="mb-2">To provide you with information about our productions or services that may be of interest to you.</li>
              <li className="mb-2">To improve our Website and user experience.</li>
              <li className="mb-2">To comply with legal obligations.</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Disclosure of Your Information</h2>
            <p className="mb-4">
              We may disclose personal information that we collect or you provide as described in this privacy policy:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">To contractors, service providers, and other third parties we use to support our business.</li>
              <li className="mb-2">To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
              <li className="mb-2">To enforce or apply our terms of service and other agreements.</li>
              <li className="mb-2">If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of IDFSUIT Productions LLC, our customers, or others.</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p className="mb-4">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Changes to Our Privacy Policy</h2>
            <p className="mb-4">
              We may update our privacy policy from time to time. If we make material changes to how we treat our users&apos; personal information, we will post the new privacy policy on this page with a notice that the privacy policy has been updated.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Contact Information</h2>
            <p className="mb-4">
              To ask questions or comment about this privacy policy and our privacy practices, contact us at:
            </p>
            <address className="not-italic mb-4">
              IDFSUIT Productions LLC<br />
              3571 Far West Blvd<br />
              PMB3222<br />
              Austin, TX 78731<br />
              Tel: +1-512-522-2822<br />
              Email: privacy@idfsuit.com
            </address>
          </section>
        </div>
      </div>
    </div>
  );
}