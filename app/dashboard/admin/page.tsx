import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded shadow-sm">
          <h2 className="text-xl font-bold mb-2">Exams</h2>
          <p className="text-3xl font-mono text-blue-600">42</p>
        </div>
        <div className="p-6 border rounded shadow-sm">
          <h2 className="text-xl font-bold mb-2">Users</h2>
          <p className="text-3xl font-mono text-green-600">1,204</p>
        </div>
        <div className="p-6 border rounded shadow-sm">
          <h2 className="text-xl font-bold mb-2">Handlers</h2>
          <p className="text-3xl font-mono text-purple-600">15</p>
        </div>
      </div>
    </div>
  );
}
