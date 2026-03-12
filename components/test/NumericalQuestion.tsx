import React from 'react';
import { QuestionProps } from '@/lib/types';

export default function NumericalQuestion({ question }: QuestionProps) {
  return (
    <div className="p-4 border rounded bg-white shadow-sm">
      <p className="text-lg font-medium mb-4">{question.text || 'Calculate the value (Round off to 2 decimal places):'}</p>
      <div className="mt-2 text-xl font-mono">
        <input
          type="number"
          step="0.01"
          placeholder="Enter numerical answer"
          className="w-full max-w-xs border-b-2 border-blue-600 focus:outline-none p-2 bg-transparent"
        />
        <p className="text-xs text-gray-400 mt-2">Max Marks: {question.marks}</p>
      </div>
    </div>
  );
}
