'use client';

import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xanewrnn';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      setFormStatus('submitting');
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
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

  if (formStatus === 'success') {
    return (
      <div className="bg-background-secondary p-8 border border-highlight text-center">
        <h3 className="text-2xl font-bold mb-4 text-highlight">Message Sent!</h3>
        <p className="mb-6">
          Thank you for contacting IDFSUIT Productions LLC. We&apos;ll be in touch soon.
        </p>
        <button
          onClick={() => setFormStatus('')}
          className="bg-accent hover:bg-highlight hover:text-background-primary text-text-primary px-8 py-3 transition-colors duration-300"
        >
          SEND ANOTHER MESSAGE
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-3 bg-background-secondary border border-gray-700 text-text-primary"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-3 bg-background-secondary border border-gray-700 text-text-primary"
          required
        />
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full p-3 bg-background-secondary border border-gray-700 text-text-primary"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full p-3 bg-background-secondary border border-gray-700 text-text-primary"
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
  );
};

export default ContactForm;
