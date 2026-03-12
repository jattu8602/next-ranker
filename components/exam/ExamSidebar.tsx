import React from 'react';

export default function ExamSidebar() {
  const categories = [
    { name: 'Engineering', exams: ['JEE Main', 'JEE Advanced', 'BITSAT'] },
    { name: 'Government', exams: ['UPSC', 'SSC CGL', 'Banking'] },
    { name: 'Law', exams: ['CLAT', 'AILET'] },
  ];

  return (
    <div className="w-64 bg-gray-50 border-r h-full p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Exams</h2>
      {categories.map((cat) => (
        <div key={cat.name} className="mb-6">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">{cat.name}</h3>
          <ul className="space-y-1">
            {cat.exams.map((exam) => (
              <li key={exam}>
                <a href="#" className="block py-1 text-gray-700 hover:text-blue-600 transition truncate">
                  {exam}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
