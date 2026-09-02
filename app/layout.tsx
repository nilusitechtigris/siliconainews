import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://siliconainews.pages.dev'),
  title: {
    default: 'Silicon AI News — Technology, Connected',
    template: '%s · Silicon AI News',
  },
  description: 'A multi-agent newsroom mapping the forces, people, and machines shaping what comes next in AI and technology.',
  applicationName: 'Silicon AI News',
  keywords: ['artificial intelligence', 'technology news', 'AI agents', 'knowledge graph', 'tech metrics'],
  authors: [{ name: 'Silicon AI Newsroom' }],
  openGraph: {
    type: 'website',
    title: 'Silicon AI News',
    description: 'Technology moves fast. We connect the dots.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Silicon AI News — Technology moves fast. We connect the dots.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silicon AI News',
    description: 'Technology moves fast. We connect the dots.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
