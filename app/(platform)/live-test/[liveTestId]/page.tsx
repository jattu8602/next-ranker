import React from 'react';

export default function LiveTestPlayerPage({ params }: { params: { liveTestId: string } }) {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-red-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold italic">LIVE: Test Player</h1>
        <div className="text-lg font-mono">Time Left: 01:29:45</div>
      </header>

      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-lg">
          <h2 className="text-3xl font-bold mb-4">Live Test ID: {params.liveTestId}</h2>
          <p className="text-gray-600 mb-8 text-lg">
            This is a placeholder for the live test interface. Real-time updates and synchronization would happen here.
          </p>
          <div className="flex justify-center space-x-4">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">● LIVE</span>
            <span className="text-gray-500">1,245 Students Joined</span>
          </div>
        </div>
      </main>
    </div>
  );
}
