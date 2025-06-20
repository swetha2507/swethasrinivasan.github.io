'use client';

export default function QuickLinks() {
  return (
    <div className="flex flex-wrap gap-4 pt-4">
      <button 
        onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
        }}
        className="inline-flex items-center px-6 py-3 border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      >
        View Projects
      </button>
    </div>
  );
} 