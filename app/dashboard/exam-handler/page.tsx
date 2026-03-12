import React from 'react';

export default function ExamHandlerDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Exam Handler Dashboard</h1>
      <p className="text-gray-600 mb-8">Manage tests, questions, and test series for your assigned exams.</p>

      <div className="space-y-6">
        <div className="p-6 bg-blue-50 border rounded text-blue-800">
          <h3 className="font-bold mb-2">Assigned Exams</h3>
          <ul className="list-disc list-inside">
            <li>JEE Main 2026</li>
            <li>JEE Advanced 2026</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
