import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Swetha Srinivasan - Portfolio',
  description: 'Software and Data Engineer Portfolio',
};

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/?section=projects', label: 'Projects' },
  { href: '/?section=education', label: 'Education' },
  { href: '/?section=experience', label: 'Experience' },
  { href: '/?section=skills', label: 'Skills' },
  { href: '/?section=leadership', label: 'Leadership & Activities' },
  { href: '/?section=certifications', label: 'Certifications' },
  { href: '/?section=contact', label: 'Contact' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {/* Main Content */}
        <main className="min-h-screen bg-white pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
