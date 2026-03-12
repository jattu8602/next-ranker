import React from 'react';
import MCQQuestion from '@/components/test/MCQQuestion';
import ParagraphQuestion from '@/components/test/ParagraphQuestion';
import NumericalQuestion from '@/components/test/NumericalQuestion';

import { Question } from '@/lib/types';

export default function QuestionRenderer({ question }: { question: Question }) {
  switch (question.type) {
    case 'MCQ':
      return <MCQQuestion question={question} />;
    case 'PARAGRAPH':
      return <ParagraphQuestion question={question} />;
    case 'NUMERICAL':
      return <NumericalQuestion question={question} />;
    default:
      return (
        <div className="p-4 bg-red-50 text-red-600 border border-red-200 rounded">
          Unknown question type: {question.type}
        </div>
      );
  }
}

