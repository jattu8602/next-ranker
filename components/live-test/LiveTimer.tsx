import React from 'react';

export default function LiveTimer({ initialSeconds }: { initialSeconds: number }) {
  return (
    <div className="flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full font-mono text-xl font-bold border border-red-300 animate-pulse">
      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
      <span>01:29:45</span>
    </div>
  );
}
