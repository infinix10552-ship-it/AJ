import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aman Jha — Software Engineer & Founder | Mumbai',
  description:
    'Software engineer and founder of Avenra. Building full-stack systems and AI-powered tools from Mumbai. Open to opportunities.',
  openGraph: {
    title: 'Aman Jha — Building Systems. Scaling Logic.',
    description:
      'Software engineer and founder of Avenra. Building full-stack systems and AI-powered tools from Mumbai.',
    images: ['/og-image.png'],
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
  other: {
    'theme-color': '#050505',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
