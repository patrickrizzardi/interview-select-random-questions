import {  IQuestion } from '../generateQuestions';

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



export function generateQuestions(
  questions: Array<IQuestion>
) {
  let currAdvanced = 0;
  let currIntermediate = 0;
  let currBeginner = 0;
  const result: Array<IQuestion> = [];
  while (currAdvanced < 3 || currIntermediate < 5 || currBeginner < 12) {
    const randomIdx = Math.floor(Math.random() * questions.length);
    const question = questions[randomIdx];

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


