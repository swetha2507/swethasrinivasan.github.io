"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home', id: 'home' },
  { href: '/?section=projects', label: 'Projects', id: 'projects' },
  { href: '/?section=education', label: 'Education', id: 'education' },
  { href: '/?section=experience', label: 'Experience', id: 'experience' },
  { href: '/?section=skills', label: 'Skills', id: 'skills' },
  { href: '/?section=leadership', label: 'Leadership & Activities', id: 'leadership' },
  { href: '/?section=certifications', label: 'Certifications', id: 'certifications' },
  { href: '/?section=contact', label: 'Contact', id: 'contact' },
];

export default function Navigation() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Intersection Observer setup
  useEffect(() => {
    const sections = NAV_LINKS.map(link => link.id);
    
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjust these values to control when a section is considered "active"
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);

    // Observe all sections
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    // Cleanup observer on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Handle URL-based navigation (for direct links)
  useEffect(() => {
    const section = searchParams.get('section') || 'home';
    setActiveSection(section);
  }, [searchParams]);

  const handleNavClick = (href: string, section: string | null) => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
        const element = document.getElementById('home');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    router.push(href, { scroll: false });
    setIsMenuOpen(false); // Close menu on click
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1e2633] shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
             <button onClick={() => handleNavClick('/', 'home')} className="text-white text-xl font-bold">
                Swetha Srinivasan
             </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map(({ href, label, id }) => {
              const isActive = activeSection === id;
              const isContact = id === 'contact';
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href, id)}
                  className={`relative px-2 py-2 text-base font-medium transition-all duration-300 ${
                    isContact 
                      ? `inline-flex items-center px-4 py-2 border-2 border-teal-400 font-medium rounded-full transition-colors duration-300 ${
                          isActive 
                            ? 'bg-teal-400 text-white' 
                            : 'text-teal-400 hover:bg-teal-400 hover:text-white'
                        }`
                      : `${
                          isActive
                            ? 'text-teal-400'
                            : 'text-white hover:text-teal-300'
                        }`
                  }`}
                >
                  {isContact && (
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"></path></svg>
                  )}
                  {!isContact && isActive && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1 h-1 bg-teal-400 rounded-full animate-pulse"></span>
                  )}
                  {label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-teal-400 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map(({ href, label, id }) => {
                const isActive = activeSection === id;
                const isContact = id === 'contact';
                return (
                  <button
                    key={href}
                    onClick={() => handleNavClick(href, id)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isContact 
                        ? `mt-2 inline-flex items-center justify-center px-4 py-2 border-2 border-teal-400 font-medium rounded-full transition-colors duration-300 ${
                            isActive 
                              ? 'bg-teal-400 text-white' 
                              : 'text-teal-400 hover:bg-teal-400 hover:text-white'
                          }`
                        : `${
                            isActive 
                              ? 'bg-teal-400 text-white' 
                              : 'text-white hover:bg-[#2a3442] hover:text-teal-400'
                          }`
                    }`}
                  >
                    {isContact && (
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    )}
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 