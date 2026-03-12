import React from 'react';

export default function UserDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-4 border rounded text-center">
          <h4 className="text-gray-500 uppercase text-xs font-bold">Attempts</h4>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="p-4 border rounded text-center">
          <h4 className="text-gray-500 uppercase text-xs font-bold">Avg. Score</h4>
          <p className="text-2xl font-bold">78%</p>
        </div>
        <div className="p-4 border rounded text-center">
          <h4 className="text-gray-500 uppercase text-xs font-bold">Points</h4>
          <p className="text-2xl font-bold">1,240</p>
        </div>
        <div className="p-4 border rounded text-center">
          <h4 className="text-gray-500 uppercase text-xs font-bold">Global Rank</h4>
          <p className="text-2xl font-bold">#452</p>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Recent Attempts</h2>
      <div className="border rounded divide-y">
        <div className="p-4 flex justify-between">
          <span>JEE Mock Test 4</span>
          <span className="font-bold text-green-600">85/100</span>
        </div>
        <div className="p-4 flex justify-between">
          <span>SSC CGL Practice 1</span>
          <span className="font-bold text-blue-600">72/100</span>
        </div>
      </div>
    </div>
  );
}
