"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

interface ProjectPopupProps {
  open: boolean;
  onClose: () => void;
  title: string;
  image: string;
  link?: string;
  bigDescription: string[];
  technologies: string[];
}

// Helper function to categorize technologies
const categorizeTech = (tech: string) => {
  const categories = {
    cloud: ['AWS', 'Azure', 'GCP', 'Lambda', 'S3', 'DynamoDB', 'API Gateway', 'Cognito'],
    infra: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'GitHub Actions'],
    auth: ['Cognito', 'OAuth', 'JWT'],
    ml: ['Python', 'Machine Learning', 'XGBoost', 'SVM', 'Regression', 'NLP', 'LlamaIndex'],
    data: ['SQL', 'SQLite', 'Pandas', 'NumPy', 'Data Visualization', 'ETL'],
    frontend: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    backend: ['Python', 'Node.js', 'Flask', 'Express'],
    tools: ['Git', 'Prefect', 'Airflow', 'Streamlit', 'Power BI', 'Tableau']
  };

  for (const [category, techs] of Object.entries(categories)) {
    if (techs.some(t => tech.toLowerCase().includes(t.toLowerCase()))) {
      return category;
    }
  }
  return 'other';
};

const getCategoryColor = (category: string) => {
  const colors = {
    cloud: 'bg-blue-50 text-blue-700 border-blue-200',
    infra: 'bg-purple-50 text-purple-700 border-purple-200',
    auth: 'bg-red-50 text-red-700 border-red-200',
    ml: 'bg-green-50 text-green-700 border-green-200',
    data: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    frontend: 'bg-orange-50 text-orange-700 border-orange-200',
    backend: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    tools: 'bg-gray-50 text-gray-700 border-gray-200',
    other: 'bg-yellow-50 text-yellow-700 border-yellow-200'
  };
  return colors[category as keyof typeof colors] || colors.other;
};

export default function ProjectPopup({ open, onClose, title, image, link, bigDescription, technologies }: ProjectPopupProps) {
  const [imageExpanded, setImageExpanded] = useState(false);

  useEffect(() => {
    if (open) {
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
  }, [open]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white text-gray-900 rounded-2xl shadow-2xl p-6 max-w-lg w-full max-h-[85vh] overflow-y-auto relative"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ 
            type: 'spring', 
            stiffness: 300, 
            damping: 30,
            duration: 0.3
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Close popup"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Project Image */}
          <motion.div 
            className="relative h-56 w-full mb-6 rounded-xl overflow-hidden shadow-md border border-gray-200/20 cursor-pointer"
            onClick={() => setImageExpanded(!imageExpanded)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className={`object-cover transition-all duration-300 ${
                imageExpanded ? 'scale-110' : 'scale-100'
              }`}
            />
            {imageExpanded && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                  Click to zoom out
                </span>
              </div>
            )}
          </motion.div>

          {/* Project Title */}
          <h2 className="text-xl font-extrabold text-[#00d6c3] mb-4 text-center">{title}</h2>

          <div className="space-y-6">
            {/* Project Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Overview</h3>
              <ul className="list-disc list-inside text-base leading-relaxed text-gray-700/90 space-y-2">
                {bigDescription.map((point, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technologies & Tools</h3>
              <div className="flex flex-wrap">
                {technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="inline-block px-3 py-1 rounded-full bg-[#00d6c3]/20 text-[#00d6c3] text-sm font-medium mr-2 mb-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            {link && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center bg-[#00d6c3] text-black px-4 py-2 rounded-md font-semibold hover:brightness-90 transition-all duration-200 hover:scale-105 shadow-md"
                >
                  <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 