import questions from "./questions";

/**
 * Create a function that generates an array of 20 unique random questions from the questions array in the './questions.js' file, categorized by difficulty levels.
 *
 * @param {Object[]} questions - An array of question objects.
 * Each object has the following structure:
 *   {
 *     difficulty: string, // Level of question difficulty ('advanced', 'intermediate', 'beginner')
 *     instructions: string, // Instructions for the question
 *     question: string, // The question text
 *     options: string[], // Array of possible answers
 *     correctAnswer: string, // Correct answer
 *   }
 *
 * @returns {Object[]} - An array of 20 unique random questions, distributed as follows:
 * - 3 questions of 'advanced' difficulty
 * - 5 questions of 'intermediate' difficulty
 * - 12 questions of 'beginner' difficulty
 */

export const EQuestionDifficulty = {
  beginner: "beginner",
  intermediate: "intermediate",
  advanced: "advanced",
} as const;

type TQuestionDifficulty = typeof EQuestionDifficulty[keyof typeof EQuestionDifficulty];

export interface IQuestion {
  difficulty: TQuestionDifficulty;
  instructions: string;
  question: string;
  options: Array<string>;
  correctAnswer: string;
}

export const generateQuestions = (questions: Array<IQuestion>): Array<IQuestion> => {
  console.log('Test');
  return [];
};

generateQuestions(questions);