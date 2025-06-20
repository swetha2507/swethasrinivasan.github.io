"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  mode: string;
  logo: string;
  description: string[];
  skills: string[];
}

const EXPERIENCES: Experience[] = [
  {
    company: 'Foundry Digital',
    role: 'Software Engineer (Data)',
    period: 'May 2024 – Dec 2024',
    location: 'Rochester, New York',
    type: 'Internship',
    mode: 'Hybrid',
    logo: '/assets/foundrydigital.png',
    description: [
      'Built a ETL pipeline to extract blockchain transaction data from public S3, transformed key metrics (gas & tokens burnt), and staged outputs as parquet files in a private S3 before integrating for Snowflake Analytics.',
      'Deployed the pipeline via Docker & Kubernetes, built & tested on dev environment using Prefect, whilst ensuring secure data movement between S3 buckets using multi-authenticated IAM based AWS sessions.',
      'Simulated data ingestion workflows using Google BigQuery to prototype data extraction and transformation (ETL) and developed interactive dashboards to visualize transactional metrics for stakeholder insight and validation.'
    ],
    skills: ['ETL', 'AWS', 'Docker', 'Kubernetes', 'Snowflake', 'BigQuery']
  },
  {
    company: 'Bosch Global Software Technologies',
    role: 'Data Analyst Intern',
    period: 'Jan 2023 – May 2023',
    location: 'Coimbatore, Tamil Nadu, India',
    type: 'Internship',
    mode: 'On-site',
    logo: '/assets/bosch.png',
    description: [
      'Extracted and transformed key sales KPIs from four Data Warehouse layers with a database schema supported by SAP BW on HANA, contributing to performance optimization of the order-to-cash (O2C) pipeline across logistics and sales.',
      'Automated reporting workflows and scheduled cron jobs for historical trend analysis using SQL, Python (Pandas), and Amazon EventBridge, enabling real-time visibility through Airflow-triggered refreshes.',
      'Designed interactive, real-time Power BI dashboards for S&P and Logistics teams to guide operational strategy decisions'
    ],
    skills: ['SQL', 'Python', 'Pandas', 'SAP BW', 'Power BI', 'AWS EventBridge']
  },
  {
    company: 'Samsung R&D Institute India',
    role: 'Data Analyst Intern',
    period: 'Nov 2021 – Jan 2023',
    location: 'Bengaluru, Karnataka, India',
    type: 'Part-time',
    mode: 'Remote',
    logo: '/assets/samsung.png',
    description: [
      'Developed a video data pipeline for license plate recognition using Python, OpenCV, and Tesseract, enabling automated extraction of text from real-world video streams.',
      'Improved text localization and tracking by integrating EAST and CRAFT models, achieving accuracy of 62.3% and precision of 57.2% across varied video conditions.'
    ],
    skills: ['Python', 'OpenCV', 'Computer Vision', 'Machine Learning', 'Tesseract']
  },
  {
    company: 'Technocolabs Softwares',
    role: 'Data Science Intern',
    period: 'Jun 2021 – Jul 2021',
    location: 'Remote',
    type: 'Internship',
    mode: 'Remote',
    logo: '/assets/technocolabs.png',
    description: [
      'Collaborated with a team to develop and deploy an end-to-end ML pipeline for predicting stock price movements using historical trading data.',
      'Handled data collection, preprocessing, feature engineering, and model training using Python and Scikit-learn, improving prediction accuracy through iterative tuning.',
      'Gained hands-on experience with version control, model deployment strategies, and real-world teamwork across the full data science lifecycle.'
    ],
    skills: ['Python', 'Machine Learning', 'Scikit-learn', 'Data Science', 'Git']
  },
  {
    company: 'iQube - Innovation Center',
    role: 'Level III Member Trainee',
    period: 'Aug 2020 – Dec 2022',
    location: 'Coimbatore, Tamil Nadu, India',
    type: 'Apprenticeship',
    mode: 'On-site',
    logo: '/assets/iqube.png',
    description: [
      'Built and deployed machine learning models (avg. 94% accuracy) for applications including early-stage crop disease detection using computer vision with camera feeds.',
      'Led a team in multiple ML and robotics-based R&D initiatives; mentored junior members, represented iQube at national hackathons, and participated in stakeholder review meetings.',
      'Engineered a robotic arm system for pick-and-place tasks using ROS and a vacuum-based 4-DOF mechanism, reducing system complexity and cost.',
      'Integrated real-time vision data with ROS pipelines using Lidar and OpenCV to power autonomous movement for 3D object handling.',
      'Researched and benchmarked open-source systems like OpenPnP and LitePlacer to design a low-cost, modular prototype assembly system.'
    ],
    skills: ['Machine Learning', 'Computer Vision', 'ROS', 'OpenCV', 'Team Leadership', 'Project Management']
  }
];

function ExperiencePopup({ experience, onClose }: { experience: Experience | null; onClose: () => void }) {
  useEffect(() => {
    if (experience) {
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
  }, [experience]);

  if (!experience) return null;

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
          className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
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
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Close popup"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200">
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={48}
                height={48}
                className="object-contain w-full h-full p-1"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#00d6c3]">{experience.company}</h2>
              <p className="text-yellow-600 font-medium">{experience.role}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {experience.period}
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {experience.location} · {experience.mode}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Key Achievements</h3>
              <ul className="list-disc list-inside space-y-2">
                {experience.description.map((point, idx) => (
                  <motion.li 
                    key={idx} 
                    className="text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, idx) => (
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
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function LogoPlaceholder({ company }: { company: string }) {
  // Find the experience data to get the logo
  const experience = EXPERIENCES.find(exp => exp.company === company);
  
  if (experience && experience.logo) {
    return (
      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-200">
        <Image
          src={experience.logo}
          alt={`${company} logo`}
          width={48}
          height={48}
          className="object-contain w-full h-full p-1"
        />
      </div>
    );
  }

  // Fallback to initials if no logo found
  const initials = company
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
      <span className="text-xl font-bold text-yellow-700">
        {initials}
      </span>
    </div>
  );
}

export default function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <section id="experience" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-center text-[#00d6c3] underline underline-offset-[6px] decoration-[#a5f3fc]/60">Experience</h2>
        
        <div className="space-y-6">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedExperience(experience)}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <LogoPlaceholder company={experience.company} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-x-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {experience.company}
                        </h3>
                        <p className="text-yellow-600 font-medium">
                          {experience.role}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm text-gray-600">{experience.period}</p>
                        <p className="text-sm text-gray-500 mt-1">{experience.type}</p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {experience.location} · {experience.mode}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ExperiencePopup
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
} 