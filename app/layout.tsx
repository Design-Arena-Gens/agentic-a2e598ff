import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Find Calm & Clarity | Tafakkur Webinar',
  description:
    'Join the Tafakkur (Sacred Pause) webinar by Aspire College of Excellence to learn mindfulness rooted in Islamic wisdom.',
  openGraph: {
    title: 'Find Calm & Clarity: Master Tafakkur',
    description:
      'Transform your daily routine with mindful awareness, inner peace, and spiritual connection in our live Tafakkur webinar.',
    url: 'https://agentic-a2e598ff.vercel.app',
    siteName: 'Tafakkur Webinar',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
        width: 1600,
        height: 900,
        alt: 'Tranquil desert sunrise'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find Calm & Clarity: Master Tafakkur',
    description:
      'Learn how the sacred pause can transform your daily life in our most requested Tafakkur webinar.',
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80'
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
