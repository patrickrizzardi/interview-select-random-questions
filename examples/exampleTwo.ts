import { EQuestionDifficulty, IQuestion } from "../generateQuestions";

/**
 * Randomly select the questions for each difficulty level and add them to the final array
 */
const randomizeQuestions = (questions: Array<IQuestion>, numberOfQuestionsNeeded: number): Array<IQuestion> => {
  const randomQuestions: IQuestion[] = [];
  for (let i = 0; i < numberOfQuestionsNeeded; i++) {
    // Get a random index from the advancedQuestions array
    const randomIndex = Math.floor(Math.random() * questions.length);

    // Add the question to the chosenTestQuestions array
    randomQuestions.push(questions[randomIndex]);

    // Remove the question from the array so it doesn't get picked again
    questions.splice(randomIndex, 1);
  }

  return randomQuestions;
};

export const generateQuestions = (questions: Array<IQuestion>): Array<IQuestion> => {
  /**
   * Define some variables to separate the questions into their respective difficulty levels
   * This will help simplify the process of adding the questions to the final array
   */
  const advancedQuestions: IQuestion[] = [];
  const intermediateQuestions: IQuestion[] = [];
  const beginnerQuestions: IQuestion[] = [];

  /**
   * Loop through the questions array and add the questions to the respective difficulty level arrays
   */
  for (const question of questions) {
  if (question.difficulty === EQuestionDifficulty.advanced) advancedQuestions.push(question);
  if (question.difficulty === EQuestionDifficulty.intermediate)
    intermediateQuestions.push(question);
  if (question.difficulty === EQuestionDifficulty.beginner) beginnerQuestions.push(question);
}

  return [
    ...randomizeQuestions(advancedQuestions, 3),
    ...randomizeQuestions(intermediateQuestions, 5),
    ...randomizeQuestions(beginnerQuestions, 12),
  ];
}