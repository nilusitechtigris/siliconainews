import type { Metadata, Viewport } from 'next';
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
  metadataBase: new URL('https://siliconainews.com'),
  title: {
    default: 'Silicon AI News — Technology, Connected',
    template: '%s · Silicon AI News',
  },
  description: 'A multi-agent newsroom mapping the forces, people, and machines shaping what comes next in AI and technology.',
  applicationName: 'Silicon AI News',
  keywords: ['artificial intelligence', 'technology news', 'AI agents', 'knowledge graph', 'tech metrics'],
  authors: [{ name: 'Silicon AI Newsroom' }],
  icons: {
    icon: [
      { url: '/favicon-96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    shortcut: '/favicon-96.png',
  },
  manifest: '/site.webmanifest',
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

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: '#0c0f0e',
};

const themeScript = `
  try {
    var savedTheme = localStorage.getItem('silicon-theme');
    var theme = savedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0c0f0e' : '#f3f1ea');
  } catch (error) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
