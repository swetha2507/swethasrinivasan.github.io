"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const EDUCATION = [
  {
    school: 'Rochester Institute of Technology',
    degree: {
      type: 'Master of Science',
      field: 'Information Technology and Analytics'
    },
    period: 'Aug 2023 – Dec 2025',
    location: 'Rochester, NY',
    logo: '/assets/rit.png',
    color: 'orange'
  },
  {
    school: 'Kumaraguru College of Technology',
    degree: {
      type: 'Bachelor of Engineering',
      field: 'Computer Science and Engineering'
    },
    period: 'Aug 2019 – May 2023',
    location: 'Coimbatore, India',
    logo: '/assets/kct.png',
    color: 'blue'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#00d6c3] underline underline-offset-4 decoration-[#00d6c3]/30 mb-8 text-center">
          Education
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.school}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white text-gray-900 rounded-xl shadow-md p-6 space-y-2 hover:shadow-lg hover:translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.school}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-yellow-600 uppercase">
                      {edu.degree.type}
                    </p>
                    <p className="text-md italic text-gray-600">
                      in {edu.degree.field}
                    </p>
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {edu.location}
                    </div>
                  </div>
                </div>
                {/* School logo */}
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-200">
                  <Image
                    src={edu.logo}
                    alt={`${edu.school} logo`}
                    width={48}
                    height={48}
                    className="object-contain w-full h-full p-1"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 