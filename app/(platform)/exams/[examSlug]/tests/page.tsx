import React from 'react';

export default function ExamTestsPage({ params }: { params: { examSlug: string } }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Tests for {params.examSlug}</h1>
      <p className="text-gray-600 mb-6">List of free and paid tests for this exam.</p>

      <div className="space-y-4">
        {/* Placeholder for test list */}
        <div className="border rounded p-4 flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-lg">Mock Test 1</h3>
            <p className="text-sm text-gray-500">Duration: 180 min | Total Marks: 300</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Take Test
          </button>
        </div>
      </div>
    </div>
  );
}
