"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LeadershipRole {
  organization: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  image: string;
  description: string[];
  skills: string[];
}

interface Award {
  title: string;
  issuedBy: string;
  date: string;
  description?: string;
}

const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    organization: 'International Student Services - RIT',
    role: 'Orientation Assistant & Head of Peer Advisor Leaders (PALs)',
    period: 'May 2025 - Present',
    location: 'Rochester, NY',
    logo: '/assets/orientation.png',
    image: '/assets/orientation.png',
    description: [
      'Led cross-functional communication between PALs and ISS Advisors to coordinate onboarding for hundreds of international students.',
      'Supervised a team of Peer Advisor Leaders, creating structured communication flows and support systems that scaled across diverse student cohorts.',
      'Streamlined orientation operations, acting as the bridge between student expectations and administrative logistics — similar to managing a product onboarding pipeline.',
      'Designed and iterated on the international student journey map, identifying touchpoints and feedback loops to improve user experience from pre-arrival through orientation.',
    ],
    skills: ['Leadership', 'Cross-functional Communication', 'Process Optimization', 'Team Management', 'User Experience'],
  },
  {
    organization: 'Saunders College of Business, RIT',
    role: 'Graduate Assistant – Competitive Sustainability Center',
    period: 'Jan 2025 - May 2025',
    location: 'Rochester, NY',
    logo: '/assets/saunders.png',
    image: '/assets/saunders.png',
    description: [
      'Led cross-functional sustainability initiatives, aligning student engagement, research, and outreach to support the growth of circular economy solutions on campus.',
      'Developed and refined training workflows to help scale sustainability education, using student feedback and impact metrics to iterate on content and delivery.',
      'Collaborated with faculty and peer teams to launch a student-led sustainability club, focusing on systems thinking and entrepreneurship through data-informed projects.',
      'Championed ecosystem mapping and stakeholder alignment, bridging gaps between academia, industry, and students to pilot sustainability-focused programs with measurable outcomes.',
    ],
    skills: ['Program Management', 'Stakeholder Management', 'Data Analysis', 'Training & Development', 'Sustainability'],
  },
  {
    organization: 'SheFi',
    role: 'SheFi Scholar – Season 12',
    period: 'Jan 2024 - Present',
    location: 'Remote',
    logo: '/assets/shefi.png',
    image: '/assets/shefi.png',
    description: [
      'Selected for an 8-week intensive Web3 training program focused on financial empowerment and inclusive technology design.',
      'Gained hands-on exposure to DeFi protocols, tokenomics, and smart contract systems through a product-led lens.',
      'Participated in collaborative sessions and expert-led discussions to explore how blockchain solutions can center real user needs.',
      'Developed a product mindset rooted in equity, user-centricity, and future-facing tech innovation.',
    ],
    skills: ['Web3', 'DeFi', 'Product Thinking', 'Blockchain', 'Financial Innovation'],
  },
  {
    organization: 'Kumaraguru College of Technology',
    role: 'President – Department Association of Computer Science',
    period: '2022 - 2023',
    location: 'Coimbatore, India',
    logo: '/assets/president.png',
    image: '/assets/president.png',
    description: [
      'Led a 60-member student organization, aligning student goals with institutional initiatives through strategic communication with faculty and administration.',
      'Orchestrated department-wide programs, mentorship initiatives, and industry-aligned events to support student growth and readiness.',
      'Acted as a student voice in the Leadership Council, advocating for experience design improvements in academic and placement processes.',
      "Managed logistics, content, and stakeholder engagement for the department's flagship festival, applying leadership like a cross-functional product team lead.",
    ],
    skills: ['Team Leadership', 'Event Management', 'Strategic Planning', 'Student Advocacy', 'Program Coordination'],
  },
  {
    organization: 'Young Indians',
    role: 'Co-Lead (Innovation) – Yuva',
    period: '2021 - 2023',
    location: 'Coimbatore, India',
    logo: '/assets/yuva.png',
    image: '/assets/yuva.png',
    description: [
      'Directed innovation-focused youth programming, designing events and speaker series with real-world application and engagement.',
      'Led the flagship IIYC event by curating content, coordinating guest participation, and shaping the overall attendee experience.',
      'Collaborated across teams to identify member needs and build programs that delivered value — like product ideation backed by user research.',
      'Inspired student entrepreneurs and changemakers by embedding creativity, feedback loops, and community storytelling into every initiative.',
    ],
    skills: ['Innovation Leadership', 'Event Planning', 'Content Curation', 'Community Building', 'Program Design'],
  },
];

const AWARDS: Award[] = [
  {
    title: "Debbie Cahn Memorial Scholarship",
    issuedBy: "iSchool – Rochester Institute of Technology",
    date: "April 2025",
    description: "Received for academic excellence and outstanding service to the student community through mentorship, peer support, and leadership as part of the MS ITA program at RIT."
  },
  {
    title: "ALL ROUNDER PERFORMER - UG",
    issuedBy: "KUMARAGURU COLLEGE OF TECHNOLOGY",
    date: "Apr 2023",
    description: "Recognized as the top performer of my 2019–2023 batch for consistent excellence across academics, leadership, and innovation."
  },
  {
    title: "BEST VOLUNTEER",
    issuedBy: "KUMARAGURU COLLEGE OF TECHNOLOGY",
    date: "Apr 2023",
    description: "Honored for 3 years of active contribution to the Department Association — leading workshops, hosting Yugam, and coordinating national events."
  },
  {
    title: "Paper Presentation - ICAIC'22",
    issuedBy: "Kumaraguru College Of Technology",
    date: "May 2022",
    description: "Presented my research on 'Virtual Writing through Air' at an international AI & Cybersecurity conference."
  },
  {
    title: "Finalists - Accenture AI Hackathon",
    issuedBy: "Accenture",
    date: "Aug 2021",
    description: "Selected by Accenture leadership to showcase our face mask detection model during the COVID era — placed 3rd nationwide."
  },
  {
    title: "The top 5 finalists in SLAC (Stay Late and Code) 2020 Hackathon",
    issuedBy: "Amrita Vishwa Vidyapeetham, Bangalore",
    date: "Nov 2020",
    description: "Secured 2nd place with team Bug Hackers in a 48-hour hackathon building real-world tech under pressure."
  }
];

function LeadershipPopup({ role, onClose }: { role: LeadershipRole | null; onClose: () => void }) {
  useEffect(() => {
    if (role) {
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
  }, [role]);

  if (!role) return null;

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
          {/* Header with Image */}
          <div className="relative h-64 w-full">
            <Image
              src={role.image}
              alt={`${role.organization} - ${role.role}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-110 z-10"
              aria-label="Close popup"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold text-[#00d6c3]">{role.organization}</h3>
              <p className="text-lg font-medium">{role.role}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {role.period}
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {role.location}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Key Achievements & Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2">
                  {role.description.map((point, idx) => (
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
                <h3 className="text-lg font-semibold text-gray-900">Skills & Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill, idx) => (
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
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function LeadershipSection() {
  const [selectedRole, setSelectedRole] = useState<LeadershipRole | null>(null);

  return (
    <section id="leadership" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-center text-[#00d6c3] underline underline-offset-[6px] decoration-[#a5f3fc]/60">Leadership & Activities</h2>
        
        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Awards & Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {AWARDS.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-semibold text-teal-500 mb-2">{award.title}</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-medium">{award.issuedBy}</p>
                  <p>{award.date}</p>
                  {award.description && (
                    <p className="text-gray-700 mt-2 italic">{award.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Existing Leadership Roles Section */}
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight text-center text-[#00d6c3] underline underline-offset-[6px] decoration-[#a5f3fc]/60">Leadership Roles</h3>
          <div className="flex overflow-x-auto gap-6 pb-8 px-4 -mx-4 snap-x snap-mandatory hide-scrollbar">
            {LEADERSHIP_ROLES.map((role, index) => (
              <motion.div
                key={role.organization}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[320px] max-w-xs bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex-shrink-0 snap-center hover:scale-105"
                onClick={() => setSelectedRole(role)}
              >
                <div className="h-48 w-full rounded-t-xl overflow-hidden">
                  <Image 
                    src={role.image} 
                    alt={role.organization} 
                    width={320} 
                    height={192} 
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 text-gray-900">{role.organization}</h3>
                  <p className="text-yellow-600 font-medium mb-2">{role.role}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {role.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <LeadershipPopup
        role={selectedRole}
        onClose={() => setSelectedRole(null)}
      />
    </section>
  );
} 