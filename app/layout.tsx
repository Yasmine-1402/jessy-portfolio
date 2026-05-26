import type { ReactNode } from 'react';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yasmine Shehata | Software Engineer & Community Leader',
  description:
    'Yasmine Shehata - Computer Science student, software engineer, and GDG leader. Specialized in full-stack development, UI/UX design, and community building.',
  keywords: [
    'Yasmine Shehata',
    'Software Engineer',
    'Frontend Developer',
    'React Developer',
    'GDG Leader',
    'Portfolio',
    'Computer Science',
    'Web Developer',
    'Cairo, Egypt',
  ],
  openGraph: {
    title: 'Yasmine Shehata | Software Engineer & Community Leader',
    description: 'Premium portfolio of a passionate software engineer and tech community leader.',
    url: 'https://yasmine-portfolio.vercel.app',
    siteName: 'Yasmine Shehata Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yasmine Shehata | Software Engineer',
    description: 'Exploring modern web development, AI, and tech community building.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#020617" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden">
        <Navigation />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
