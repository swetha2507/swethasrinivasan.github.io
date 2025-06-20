"use client";

import { motion } from 'framer-motion';

const SKILLS = {
  'Languages & Frameworks': [
    'Python',
    'TypeScript',
    'JavaScript',
    'SQL',
    'C/C++',
    'React',
    'Flask',
    'Bash/Shell Scripting',
    'Node.js',
  ],
  'Data Engineering & Analytics': [
    'ETL Pipeline Development',
    'DBT',
    'Pandas',
    'NumPy',
    'Tableau',
    'Power BI',
    'Looker Studio',
    'Snowflake',
    'Google BigQuery',
  ],
  'Machine Learning & AI': [
    'Machine Learning',
    'Computer Vision',
    'OpenCV',
    'Scikit-learn',
    'TensorFlow',
    'AWS Bedrock',
    'Data Preprocessing',
    'Model Deployment',
  ],
  'DevOps & Tools': [
    'Docker',
    'Kubernetes',
    'Git',
    'GitHub Actions',
    'CI/CD',
    'Terraform',
    'AWS IAM',
    'Prefect',
    'Airflow',
  ],
  'Database & Cloud': [
    'MySQL',
    'MongoDB',
    'Neo4j',
    'PostgreSQL',
    'SAP BW',
    'HANA',
    'AWS API Gateway',
    'AWS (S3, Lambda, EventBridge)',
    'Data Warehousing',
    'Cloud Architecture',
  ],
  'Soft Skills': [
    'Team Leadership',
    'Project Management',
    'Technical Mentorship',
    'Public Speaking',
    'Event Planning',
    'Problem Solving',
    'Technical Documentation',
    'Stakeholder Communication',
    'Cross-functional Collaboration',
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-center text-[#00d6c3] underline underline-offset-[6px] decoration-[#a5f3fc]/60">Skills & Technologies</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(SKILLS).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-yellow-600">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-yellow-100 hover:text-yellow-800 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Level Legend */}
        <div className="mt-12 text-center text-sm text-gray-600">
          <p>All skills have been applied in real-world projects/experiences</p>
        </div>
      </div>
    </section>
  );
} 