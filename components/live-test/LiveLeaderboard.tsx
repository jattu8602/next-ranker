import React from 'react';

export default function LiveLeaderboard() {
  const players = [
    { rank: 1, name: 'Rahul S.', score: 98, time: '12:45' },
    { rank: 2, name: 'Ankita K.', score: 95, time: '13:12' },
    { rank: 3, name: 'Nitesh J.', score: 92, time: '14:05' },
    { rank: 4, name: 'Priya M.', score: 88, time: '15:20' },
  ];

  return (
    <div className="bg-white border rounded shadow-lg p-6 overflow-hidden">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <span className="mr-2">🏆</span> Live Leaderboard
      </h3>
      <div className="space-y-3">
        {players.map(p => (
          <div key={p.rank} className={`flex items-center justify-between p-3 rounded ${p.rank === 1 ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'}`}>
            <div className="flex items-center space-x-3">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${p.rank === 1 ? 'bg-yellow-400 text-white' : 'bg-gray-300 text-gray-700'}`}>
                {p.rank}
              </span>
              <span className="font-medium">{p.name}</span>
            </div>
            <div className="text-right">
              <div className="font-bold text-blue-600">{p.score} pts</div>
              <div className="text-[10px] text-gray-400 font-mono">{p.time}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="text-sm text-blue-600 hover:underline">View Full Leaderboard &rarr;</button>
      </div>
    </div>
  );
}
