import React, { useState } from 'react';

const EducationSection = () => {
  const [activeTab, setActiveTab] = useState('Skills');

  return (
    <div className="education-section">
      <div className="tabs flex justify-start space-x-4 mb-4 relative">
        <button
          className={`text-xl py-1 relative dark:text-white ${
            activeTab === 'Skills' ? 'text-teal-500' : 'text-black hover:text-teal-400'
          }`}
          onClick={() => setActiveTab('Skills')}
        >
          Skills
          {activeTab === 'Skills' && (
            <span className="absolute left-0 bottom-[-8px] w-[120%] h-[4px] bg-teal-500 transition-transform duration-300 ease-out"></span>
          )}
        </button>
        <button
          className={`text-xl py-1 relative dark:text-white ${
            activeTab === 'Certifications' ? 'text-teal-500' : 'text-black hover:text-teal-400'
          }`}
          onClick={() => setActiveTab('Certifications')}
        >
          Certifications
          {activeTab === 'Certifications' && (
            <span className="absolute left-0 bottom-[-8px] w-[100%] h-[4px] bg-teal-500 transition-transform duration-300 ease-out"></span>
          )}
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'Skills' && (
          <ul className="list-disc pl-5 py-1 dark:text-white">
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Next JS</li>
            <li>Java</li>
            <li>MySql</li>
            <li>Tailwind CSS</li>
            <li>Material UI</li>
            <li>HTML and CSS</li>
          </ul>
        )}

        {activeTab === 'Certifications' && (
          <ul className="list-disc pl-5 py-1 dark:text-white">
            <li>Certification 1</li>
            <li>Certification 2</li>
            {/* Add more certifications as needed */}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EducationSection;
