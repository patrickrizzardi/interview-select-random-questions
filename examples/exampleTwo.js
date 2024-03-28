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

const chosenTestQuestions = [];

const selectQuestions = questions => {
  /**
   * Define the number of questions to be asked for each difficulty level
   * This will be used to determine the number of questions to be asked for each difficulty level
   */
  const totalAdvancedQuestions = 3;
  const totalIntermediateQuestions = 5;
  const totalBeginnerQuestions = 12;

  /**
   * Define some variables to separate the questions into their respective difficulty levels
   * This will help simplify the process of adding the questions to the final array
   */
  const advancedQuestions = [];
  const intermediateQuestions = [];
  const beginnerQuestions = [];

  /**
   * Loop through the questions array and add the questions to the respective difficulty level arrays
   */
  for (const question of questions) {
    if (question.difficulty === 'advanced') advancedQuestions.push(question);
    if (question.difficulty === 'intermediate') intermediateQuestions.push(question);
    if (question.difficulty === 'beginner') beginnerQuestions.push(question);
  }

  /**
   * Randomly select the questions for each difficulty level and add them to the final array
   */
  for (let i = 0; i < totalAdvancedQuestions; i++) {
    // Get a random index from the advancedQuestions array
    const randomIndex = Math.floor(Math.random() * advancedQuestions.length);

    // Add the question to the chosenTestQuestions array
    chosenTestQuestions.push(advancedQuestions[randomIndex]);

    // Remove the question from the array so it doesn't get picked again
    advancedQuestions.splice(randomIndex, 1);
  }

  for (let i = 0; i < totalIntermediateQuestions; i++) {
    // Get a random index from the intermediateQuestions array
    const randomIndex = Math.floor(Math.random() * intermediateQuestions.length);

    // Add the question to the chosenTestQuestions array
    chosenTestQuestions.push(intermediateQuestions[randomIndex]);

    // Remove the question from the array so it doesn't get picked again
    intermediateQuestions.splice(randomIndex, 1);
  }

  for (let i = 0; i < totalBeginnerQuestions; i++) {
    // Get a random index from the beginnerQuestions array
    const randomIndex = Math.floor(Math.random() * beginnerQuestions.length);

    // Add the question to the chosenTestQuestions array
    chosenTestQuestions.push(beginnerQuestions[randomIndex]);

    // Remove the question from the array so it doesn't get picked again
    beginnerQuestions.splice(randomIndex, 1);
  }

  return chosenTestQuestions;
};

/**
 * Group the questions by difficulty
 */
const finalQuestions = selectQuestions(questions);
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
