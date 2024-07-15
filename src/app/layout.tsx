import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import FloatingWhatsAppButton from '@/components/WhatsappSupport';
import { Footer } from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dmystified.tech/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  title: 'Affordable Live Tech Courses for Developers | Dmystified',

  description:
    'Join Dmystified for affordable live tech courses tailored for developers. Learn programming languages online from expert instructors in real-time. Empower your tech career with hands-on experience and practical skills. Enroll now and start your journey towards becoming a proficient developer.',
  twitter: {
    card: 'summary_large_image',
  },
  verification: {
    google: 'ikm_TGlrqUSyjmjmNUTMShS5NZQEj-SQjDhU36Wq_es',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Toaster />
        <Navbar />
        <FloatingWhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
