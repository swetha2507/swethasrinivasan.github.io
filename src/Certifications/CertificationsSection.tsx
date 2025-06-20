"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Certificate {
  title: string;
  organization: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl: string;
  image: string;
  skills?: string[];
}

const CERTIFICATES: Certificate[] = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    organization: 'Microsoft',
    issueDate: 'May 2025',
    credentialId: '6C2F4B10117A6C37',
    credentialUrl: 'https://learn.microsoft.com/en-us/users/swethasrinivasan-6908/credentials/6c2f4b10117a6c37',
    image: '/assets/azure.png',
    skills: ['Azure', 'Cloud Computing', 'Cloud Infrastructure']
  },
  {
    title: 'Chainalysis Reactor Certification',
    organization: 'Chainalysis',
    issueDate: 'Apr 2025',
    credentialUrl: 'https://academy.chainalysis.com/c/ixKV_BzCSxuSkGHw4_r7Yg',
    image: '/assets/chainalysis_reactor.jpeg',
    skills: ['Blockchain', 'Cryptocurrency', 'Transaction Analysis']
  },
  {
    title: 'Chainalysis Cryptocurrency Fundamentals Certification',
    organization: 'Chainalysis',
    issueDate: 'Mar 2025',
    credentialUrl: 'https://academy.chainalysis.com/c/gTYNss1FRv-UbrICnt5-Ug',
    image: '/assets/chainalysis_fundamentals.jpeg',
    skills: ['Blockchain', 'Cryptocurrency', 'Digital Assets']
  }
];

function CertificatePopup({ certificate, onClose }: { certificate: Certificate | null; onClose: () => void }) {
  useEffect(() => {
    if (certificate) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.dataset.scrollY = scrollY.toString();

      return () => {
        requestAnimationFrame(() => {
          const y = document.body.dataset.scrollY;
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
          window.scrollTo(0, parseInt(y || '0'));
        });
      };
    }
  }, [certificate]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ 
            type: 'spring', 
            stiffness: 300, 
            damping: 30,
            duration: 0.3
          }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="relative h-64 w-full">
            <Image
              src={certificate.image}
              alt={`${certificate.title} - ${certificate.organization}`}
              fill
              className="object-contain p-4"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-110 z-10"
              aria-label="Close popup"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6 border-t border-gray-200">
            <h3 className="text-xl font-bold text-[#00d6c3] mb-2">{certificate.title}</h3>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {certificate.organization}
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Issued {certificate.issueDate}
                </div>
                {certificate.credentialId && (
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Credential ID: {certificate.credentialId}
                  </div>
                )}
              </div>

              {certificate.skills && (
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-gray-900">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 bg-[#00d6c3]/20 text-[#00d6c3] text-sm rounded-full font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              <motion.a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#00d6c3] hover:bg-[#00d6c3]/90 text-black rounded-lg transition-all duration-200 hover:scale-105 shadow-md font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                View Certificate
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function CertificationsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-center text-[#00d6c3] underline underline-offset-[6px] decoration-[#a5f3fc]/60">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCertificate(cert)}
            >
              <div className="h-48 w-full rounded-t-lg overflow-hidden bg-gray-50 p-4">
                <div className="relative h-full w-full">
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill
                    className="object-contain" 
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900">{cert.title}</h3>
                <p className="text-yellow-600 font-medium mb-2">{cert.organization}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {cert.issueDate}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CertificatePopup
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
} 