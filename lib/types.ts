export type QuestionType = 'MCQ' | 'PARAGRAPH' | 'NUMERICAL' | 'MULTI_SELECT';

export interface Question {
  id: string;
  type: QuestionType;
  text?: string;
  optionA?: string;
  optionB?: string;
  optionC?: string;
  optionD?: string;
  correctAnswer?: string;
  marks: number;
  paragraphText?: string;
}

export interface QuestionProps {
  question: Question;
}
