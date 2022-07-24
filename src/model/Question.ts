export interface Question {
  text: string;
  acceptedAnswers: string[];
}

export interface Attempt {
  question: Question;
  playerAnswer: string;
}

export const createBlankAttempt = (question: Question) => ({
  question,
  playerAnswer: "",
});

export const isCorrect = (attempt: Attempt) =>
  attempt.question.acceptedAnswers.includes(attempt.playerAnswer);
