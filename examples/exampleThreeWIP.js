import questions from '../questions';

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
