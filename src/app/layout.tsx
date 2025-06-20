import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Swetha Srinivasan - Portfolio',
  description: 'Software and Data Engineer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Suspense fallback={<div></div>}>
          <Navigation />
        </Suspense>
        {/* Main Content */}
        <main className="min-h-screen bg-white pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
