"use client";

import { useState } from 'react';
import { Project } from '../interface';
import Image from 'next/image';
import ProjectPopup from './ProjectPopup';

type ProjectCategory = 'All' | 'AI/ML' | 'Full Stack' | 'Data' | 'SQL';

const PROJECTS: (Project & { categories: ProjectCategory[] })[] = [
  {
    title: 'BrevityCloud – AI Powered Chrome Extension',
    description: 'AI summarization and intelligent content understanding for any webpage.',
    image: '/assets/brevitycloud.png',
    link: 'https://github.com/The-Brevity-Cloud/term-project-team4-brevitycloud',
    bigDescription: [
      'Built a Chrome Extension that performs real-time summarization, Q&A, and image analysis on webpages using AWS AI services.',
      'Integrated AWS Bedrock (Claude), Amazon Kendra, and Rekognition for intelligent content extraction.',
      'Implemented user authentication with Cognito; secure backend via API Gateway + Lambda (Python).',
      'Used Terraform for Infrastructure as Code and GitHub Actions for automated CI/CD.',
      'Designed a fully serverless, event-driven architecture with S3, DynamoDB, and modular microservices.',
    ],
    technologies: ['AWS', 'Python', 'Lambda', 'Terraform', 'Kendra', 'Rekognition', 'Cognito'],
    categories: ['AI/ML', 'Full Stack']
  },
  {
    title: 'QueryEase – Natural Language to SQL using LlamaIndex',
    description: 'Talk to your database using plain English.',
    image: '/assets/queryease.png',
    link: 'https://github.com/swetha2507/QueryEase',
    bigDescription: [
      'Developed an NLP-powered interface using LlamaIndex to translate natural language into SQL.',
      'Enabled non-technical users to query structured databases with ease.',
      'Applied prompt engineering to improve SQL generation accuracy and contextual understanding.',
      'Reduced manual effort and improved data accessibility for business users.',
    ],
    technologies: ['LlamaIndex', 'SQL', 'NLP', 'Python'],
    categories: ['AI/ML', 'SQL']
  },
  {
    title: 'Expedited Internet Bypass Protocol (EIBP)',
    description: 'High-performance routing protocol for faster Internet traffic.',
    image: '/assets/eibp.png',
    link: 'https://github.com/swetha2507/EIBP',
    bigDescription: [
      'Designed a custom Layer 2.5 protocol in C for optimized domain-based routing.',
      'Achieved 45% improvement over OSPF in routing speed and efficiency.',
      'Deployed and benchmarked on FABRIC testbed with automated Python evaluation framework.',
      'Engineered a hierarchical index-based routing model for scalable path resolution.',
    ],
    technologies: ['C', 'Python', 'Networking', 'Fabric Testbed'],
    categories: ['Full Stack']
  },
  {
    title: 'StreamFlix – Streaming Trends Dashboard',
    description: 'Visual insights into binge-worthy streaming content.',
    image: '/assets/streamflix.png',
    link: 'https://github.com/swetha2507/streaming-analytics-project',
    bigDescription: [
      'Pulled and processed metadata from TMDB API using Python + Pandas.',
      'Analyzed genre, runtime, and platform trends across top streaming titles.',
      'Built visualizations using Matplotlib and Seaborn to highlight viewer engagement drivers.',
    ],
    technologies: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'TMDB API'],
    categories: ['Data']
  },
  {
    title: 'Retail Worker Demand Forecaster',
    description: 'ML-powered workforce forecasting for retail.',
    image: '/assets/retail-worker.png',
    link: 'https://github.com/swetha2507/retail-worker-demand-forecaster',
    bigDescription: [
      'Trained XGBoost regression models to forecast daily staffing needs using sales, promos, and weather data.',
      'Performed feature engineering, including time flags, weather conditions, and holiday effects.',
      'Developed an interactive Streamlit dashboard with metrics like RMSE, MAE, R² for model evaluation.',
      'Delivered a scalable forecasting tool to optimize labor planning in retail.',
    ],
    technologies: ['Python', 'XGBoost', 'Streamlit', 'Pandas', 'Data Visualization'],
    categories: ['AI/ML', 'Data']
  },
  {
    title: 'Brazilian E-Commerce SQL Analysis',
    description: 'SQL-based customer and sales insights from e-commerce data.',
    image: '/assets/brazilian.png',
    link: 'https://github.com/swetha2507/brazilian-ecommerce-sql',
    bigDescription: [
      'Analyzed the Olist e-commerce dataset using SQL (SQLite) and Python.',
      'Answered key business questions around delivery delays, payment methods, and seller performance.',
      'Built clean SQL queries and visual dashboards to support decision-making.',
    ],
    technologies: ['SQL', 'SQLite', 'Python', 'Pandas'],
    categories: ['Data', 'SQL']
  },
  {
    title: 'Stock Price Movement Prediction',
    description: 'Predicting market behavior using machine learning.',
    image: '/assets/stock.png',
    link: 'https://github.com/swetha2507/Prediction-of-Stock-Price-Movement-based-on-trading-DS-II',
    bigDescription: [
      'Built and trained SVM, Linear, and Polynomial Regression models on historical stock data.',
      'Implemented data cleaning, normalization, and feature selection to improve accuracy.',
      'Visualized predictions and comparisons to actual trends for investment forecasting.',
    ],
    technologies: ['Python', 'SVM', 'Regression', 'Data Visualization'],
    categories: ['AI/ML', 'Data']
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const filteredProjects = PROJECTS.filter(project => 
    activeFilter === 'All' || project.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-center text-[#00d6c3] underline underline-offset-[6px] decoration-[#a5f3fc]/60">Projects</h2>
      
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {['All', 'AI/ML', 'Full Stack', 'Data', 'SQL'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category as ProjectCategory)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === category 
                ? 'bg-teal-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* First row: first 3 projects */}
        {filteredProjects.slice(0, 3).map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
            onClick={() => setSelectedProject(project)}
          >
            <div className="h-48 w-full rounded-t-xl overflow-hidden">
              <Image 
                src={project.image} 
                alt={`${project.title} preview`}
                width={400} 
                height={300} 
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/assets/fallback.png';
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3 text-gray-900">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.categories.map(cat => (
                  <span key={cat} className="text-xs px-3 py-1 bg-teal-50 text-teal-600 rounded-full">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* Second row: next 3 projects */}
        {filteredProjects.slice(3, 6).map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
            onClick={() => setSelectedProject(project)}
          >
            <div className="h-48 w-full rounded-t-xl overflow-hidden">
              <Image 
                src={project.image} 
                alt={`${project.title} preview`}
                width={400} 
                height={300} 
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/assets/fallback.png';
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3 text-gray-900">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.categories.map(cat => (
                  <span key={cat} className="text-xs px-3 py-1 bg-teal-50 text-teal-600 rounded-full">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* Third row: last project centered */}
        {filteredProjects.length === 7 && (
          <div
            key={filteredProjects[6].title}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] col-span-1 lg:col-start-2 mx-auto"
            onClick={() => setSelectedProject(filteredProjects[6])}
          >
            <div className="h-48 w-full rounded-t-xl overflow-hidden">
              <Image 
                src={filteredProjects[6].image} 
                alt={`${filteredProjects[6].title} preview`}
                width={400} 
                height={300} 
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/assets/fallback.png';
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3 text-gray-900">{filteredProjects[6].title}</h3>
              <p className="text-gray-600 text-sm mb-4">{filteredProjects[6].description}</p>
              <div className="flex flex-wrap gap-2">
                {filteredProjects[6].categories.map(cat => (
                  <span key={cat} className="text-xs px-3 py-1 bg-teal-50 text-teal-600 rounded-full">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <ProjectPopup
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
        image={selectedProject?.image || ''}
        link={selectedProject?.link}
        bigDescription={selectedProject?.bigDescription || []}
        technologies={selectedProject?.technologies || []}
      />
    </section>
  );
} 