import React from 'react';

export default function ExamPage({ params }: { params: { examSlug: string } }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Exam: {params.examSlug}</h1>
      <p className="text-gray-600 mb-6">Welcome to the overview page for {params.examSlug}.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Available Tests</h2>
          <p className="mb-4">Browse and attempt mock tests for this exam.</p>
          <a href={`/exams/${params.examSlug}/tests`} className="text-blue-600 hover:underline">View Tests &rarr;</a>
        </div>

        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Live Tests</h2>
          <p className="mb-4">Check scheduled live tests and register to attend.</p>
          <a href={`/exams/${params.examSlug}/live`} className="text-blue-600 hover:underline">View Live Tests &rarr;</a>
        </div>
      </div>
    </div>
  );
}
