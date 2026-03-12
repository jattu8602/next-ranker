import React from 'react';

export default function TestPlayerPage({ params }: { params: { testId: string } }) {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Test Player</h1>
        <div className="text-lg">Remaining: 02:59:59</div>
      </header>

      <main className="flex-1 overflow-hidden flex">
        <div className="flex-1 p-8 overflow-y-auto">
          {/* Question Area */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Question 1</h2>
            <p className="text-lg mb-6">Sample question content for test ID: {params.testId}</p>

            <div className="space-y-3">
              <label className="flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50">
                <input type="radio" name="option" className="mr-3" />
                Option A
              </label>
              <label className="flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50">
                <input type="radio" name="option" className="mr-3" />
                Option B
              </label>
            </div>
          </div>
        </div>

        <aside className="w-80 bg-gray-50 border-l p-4 overflow-y-auto">
          <h3 className="font-bold mb-4">Question Palette</h3>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <button key={i} className="w-10 h-10 border rounded flex items-center justify-center hover:bg-gray-200">
                {i + 1}
              </button>
            ))}
          </div>
        </aside>
      </main>

      <footer className="bg-white border-t p-4 flex justify-between">
        <button className="px-6 py-2 border rounded hover:bg-gray-50">Previous</button>
        <div className="space-x-4">
          <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">Submit Test</button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Next</button>
        </div>
      </footer>
    </div>
  );
}
