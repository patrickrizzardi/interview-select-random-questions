import questions from '../questions';

/**
 * Given an array of question objects
 * Question object:
 *   {
 *     difficulty: 'beginner' | 'intermediate' | 'advanced',
 *     instructions: string,
 *     question: string,
 *     options: string[],
 *     correctAnswer: string,
 *   }
 *
 * Create a function that returns an array of the following:
 * 3 random questions where difficulty = 'advanced'
 * 5 random questions where difficulty = 'intermediate'
 * 12 random questions where difficulty = 'beginner'
 *
 * The returned array should have a total of 20 questions at the end.
 */

function selectedQuestions(input) {
  let currAdvanced = 0;
  let currIntermediate = 0;
  let currBeginner = 0;
  const result = [];
  while (currAdvanced < 3 || currIntermediate < 5 || currBeginner < 12) {
    const randomIdx = Math.floor(Math.random() * input.length);
    const question = input[randomIdx];

    switch (question.difficulty) {
      case 'beginner':
        if (currBeginner < 12) {
          result.push(question);
          questions.splice(randomIdx, 1);
          currBeginner++;
        }
        break;
      case 'intermediate':
        if (currIntermediate < 5) {
          result.push(question);
          questions.splice(randomIdx, 1);
          currIntermediate++;
        }
        break;
      case 'advanced':
        if (currAdvanced < 3) {
          result.push(question);
          questions.splice(randomIdx, 1);
          currAdvanced++;
        }
    }
  }
  return result;
}

/**
 * Group the questions by difficulty
 */
const finalQuestions = selectedQuestions(questions);
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
