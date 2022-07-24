export interface Question {
  id: string;
  text: string;
  acceptedAnswers: string[];
}

export interface Attempt {
  question: Question;
  answer: string;
  correct: () => boolean;
}
