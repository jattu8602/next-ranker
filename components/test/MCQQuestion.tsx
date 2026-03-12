import React from 'react';
import { QuestionProps } from '@/lib/types';

export default function MCQQuestion({ question }: QuestionProps) {
  return (
    <div className="p-4 border rounded bg-white shadow-sm">
      <p className="text-lg font-medium mb-4">{question.text || 'Sample MCQ Question?'}</p>
      <div className="space-y-2">
        {[
          { label: 'A', text: question.optionA || 'Option A' },
          { label: 'B', text: question.optionB || 'Option B' },
          { label: 'C', text: question.optionC || 'Option C' },
          { label: 'D', text: question.optionD || 'Option D' },
        ].map((opt) => (
          <label key={opt.label} className="flex items-center p-2 border rounded hover:bg-gray-50 cursor-pointer">
            <input type="radio" name={`q-${question.id}`} className="mr-3" />
            <span className="font-semibold mr-2">{opt.label}.</span>
            {opt.text}
          </label>
        ))}
      </div>
    </div>
  );
}

