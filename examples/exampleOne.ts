import { IQuestion } from '../generateQuestions';

/**
 * Given an array of question objects
 * Question object:
 *   {
 *     difficulty: string,
 *     instructions: string,
 *     question: string,
 *     options: string[],
 *     correctAnswer: string,
 *   }
 *
 * Create a function that returns an array of the following:
 * 3 questions where difficulty = 'advanced'
 * 5 questions where difficulty = 'intermediate'
 * 12 questions where difficulty = 'beginner'
 *
 * The returned array should have a total of 20 questions at the end.
 */

export const generateQuestions = (questions: Array<IQuestion>) => {
  const totalAdvancedQuestions = 3;
  const totalIntermediateQuestions = 5;
  const totalBeginnerQuestions = 12;

  const beginnerQuestions = questions.filter(q => q.difficulty === 'beginner');
  const intermediateQuestions = questions.filter(q => q.difficulty === 'intermediate');
  const advancedQuestions = questions.filter(q => q.difficulty === 'advanced');

  const advancedQuestionsRandom = advancedQuestions.sort(() => Math.random() - 0.5).slice(0, totalAdvancedQuestions);

  const intermediateQuestionsRandom = intermediateQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, totalIntermediateQuestions);

  const beginnerQuestionsRandom = beginnerQuestions.sort(() => Math.random() - 0.5).slice(0, totalBeginnerQuestions);

  return [...advancedQuestionsRandom, ...intermediateQuestionsRandom, ...beginnerQuestionsRandom];
};


