import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Global Market Agent — AI-Powered GTM Intelligence',
  description:
    'AI agent that transforms product ideas into actionable go-to-market reports in seconds. Competitor analysis, price benchmarking, and GTM strategy for cross-border sellers.',
  keywords: 'market research, GTM strategy, Amazon analytics, TikTok commerce, cross-border selling',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
