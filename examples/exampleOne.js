import questions from '../questions';

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

const createQuestions = questions => {
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

/**
 * Group the questions by difficulty
 */
const finalQuestions = createQuestions(questions);
const finalBeginnerQuestions = finalQuestions.filter(q => q.difficulty === 'beginner');
const finalIntermediateQuestions = finalQuestions.filter(q => q.difficulty === 'intermediate');
const finalAdvancedQuestions = finalQuestions.filter(q => q.difficulty === 'advanced');

/**
 * Print the results
 */
console.log('Total', finalQuestions.length);
console.log('Beginner', finalBeginnerQuestions.length);
console.log('Intermediate', finalIntermediateQuestions.length);
console.log('Advanced', finalAdvancedQuestions.length);

/**
 * Verify no question is repeated
 */
console.log('No repeated questions:', finalQuestions.length === new Set(finalQuestions).size);
console.log('No repeated beginner questions:', finalBeginnerQuestions.length === new Set(finalBeginnerQuestions).size);
console.log(
  'No repeated intermediate questions:',
  finalIntermediateQuestions.length === new Set(finalIntermediateQuestions).size
);
console.log('No repeated advanced questions:', finalAdvancedQuestions.length === new Set(finalAdvancedQuestions).size);
