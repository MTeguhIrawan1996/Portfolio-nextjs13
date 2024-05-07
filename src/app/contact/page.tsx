import { Metadata } from 'next';

import { ContactPage } from '@/components/features';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Contact() {
  return <ContactPage />;
}
