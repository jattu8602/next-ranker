import React from 'react';

export default function ExamLiveTestsPage({ params }: { params: { examSlug: string } }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Live Tests for {params.examSlug}</h1>
      <p className="text-gray-600 mb-6">Join scheduled live tests for real-time practice.</p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-yellow-700">No live tests currently scheduled. Check back later!</p>
      </div>
    </div>
  );
}
