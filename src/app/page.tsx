"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import ProjectsSection from '../Projects/ProjectsSection';
import EducationSection from '../Education/EducationSection';
import ExperienceSection from '../Experience/ExperienceSection';
import SkillsSection from '../Skills/SkillsSection';
import LeadershipSection from '../Leadership/LeadershipSection';
import CertificationsSection from '../Certifications/CertificationsSection';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if there's a section to scroll to
    const section = searchParams.get('section');
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  return (
    <div className="bg-white">
      {/* Intro Section */}
      <section id="home" className="pt-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 py-20">
            {/* Profile Image Column */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden border-4 border-teal-400">
                <Image src="/assets/Me.jpg" alt="Swetha Srinivasan" width={192} height={192} className="object-cover w-full h-full rounded-full" />
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#e0e0e0] mt-4 mb-2 text-center">
                Hey <span role="img" aria-label="wave" className="inline-block animate-wave">👋</span>, I&apos;m Swetha
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-teal-400 mb-4 text-center hover:text-teal-300 transition-colors">
                Software/Data Engineer
              </h2>
            </div>

            {/* Text Content Column */}
            <div className="flex-1 space-y-6 text-[#e0e0e0] max-w-3xl">
              <p className="text-lg leading-relaxed">
                I&apos;m Swetha Srinivasan, a backend and data-focused engineer currently pursuing my Master&apos;s in Information Technology and Analytics at RIT. I enjoy building systems that do the heavy lifting quietly — from serverless apps and clean APIs to real-time dashboards and ETL pipelines.
              </p>
              <p className="text-lg leading-relaxed">
                Over the last few years, I&apos;ve worked across cloud infrastructure (AWS, Terraform), Python-based ETL tools, SQL databases, and frontend frameworks like React. For data visualization, I use tools like Tableau and Power BI to turn insights into clear, compelling visuals. I love solving complex problems and making them feel effortless.
              </p>
              <p className="text-lg leading-relaxed">
                Outside of tech, I&apos;ve been trained in Carnatic music (an Indian classical music form) for over 12 years and have performed multiple solo concerts — it&apos;s taught me discipline, stage confidence, and how to stay calm under pressure (very helpful during deploys!).
              </p>
              <p className="text-lg leading-relaxed">
                Right now, I&apos;m looking for a full-time role where I can grow as an engineer, work on meaningful projects, and learn from a team that cares about building things the right way. I&apos;m open to roles across the U.S. and happy to relocate for the right opportunity.
              </p>

              {/* Quick Links */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    router.push('/?section=contact', { scroll: false });
                  }}
                  className="inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Get in Touch
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button 
                  onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    router.push('/?section=projects', { scroll: false });
                  }}
                  className="inline-flex items-center px-6 py-3 border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="education">
        <EducationSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="leadership">
        <LeadershipSection />
      </div>
      <div id="certifications">
        <CertificationsSection />
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-center text-white underline underline-offset-[6px] decoration-white/60">Get in Touch</h2>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 mr-3 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="flex flex-col">
                      <a href="mailto:ss9577@rit.edu" className="hover:text-teal-600 transition-colors">
                        ss9577@rit.edu
                      </a>
                      <a href="mailto:swethasrao25@gmail.com" className="hover:text-teal-600 transition-colors">
                        swethasrao25@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 mr-3 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>New York</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect with me</h4>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://www.linkedin.com/in/swethasrinivasan25/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
                    >
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/swetha2507"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
                    >
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    <a
                      href="https://theinchoatejournal.blogspot.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
                    >
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                      Read My Blog
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Message */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Message</h3>
                <p className="text-gray-600 mb-6">
                  I&apos;m always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology.
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:ss9577@rit.edu"
                    className="inline-flex w-full items-center justify-center px-6 py-3 bg-teal-400 hover:bg-teal-500 text-white font-medium rounded-lg transition-colors"
                  >
                    Send Email
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

