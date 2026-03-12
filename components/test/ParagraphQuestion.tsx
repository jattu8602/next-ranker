import React from 'react';
import { QuestionProps } from '@/lib/types';

export default function ParagraphQuestion({ question }: QuestionProps) {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-gray-100 rounded border">
        <h3 className="font-bold mb-2 uppercase text-xs text-gray-500 tracking-widest">Read the following passage:</h3>
        <p className="italic text-gray-700 leading-relaxed">
          {question.paragraphText || 'This is a sample passage for a comprehension-based question set.'}
        </p>
      </div>

      <div className="space-y-4">
        <p className="font-semibold">Question: {question.text}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            { label: 'A', text: question.optionA || 'Option A' },
            { label: 'B', text: question.optionB || 'Option B' },
            { label: 'C', text: question.optionC || 'Option C' },
            { label: 'D', text: question.optionD || 'Option D' },
          ].map(opt => (
            <label key={opt.label} className="p-2 border rounded hover:bg-gray-50 cursor-pointer flex items-center">
              <input type="radio" name={`q-${question.id}`} className="mr-2" />
              <span className="font-semibold mr-2">{opt.label}.</span>
              {opt.text}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
