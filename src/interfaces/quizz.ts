export interface QuizChoice {
  text: string;
}

export interface QuizInfo {
  question: string;
  options: QuizChoice[];
  answerIndex: number;
  explanationText: string;
}
