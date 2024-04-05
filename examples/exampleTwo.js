import questions from "../questions";

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

/**
 * Randomly select the questions for each difficulty level and add them to the final array
 */
const randomizeQuestions = (questions, numberOfQuestionsNeeded) => {
  const randomQuestions = [];
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
  if (question.difficulty === "advanced") advancedQuestions.push(question);
  if (question.difficulty === "intermediate")
    intermediateQuestions.push(question);
  if (question.difficulty === "beginner") beginnerQuestions.push(question);
}

/**
 * Define the number of questions to be asked for each difficulty level
 * This will be used to determine the number of questions 
 */
const totalAdvancedQuestions = 3;
const totalIntermediateQuestions = 5;
const totalBeginnerQuestions = 12;

let finalQuestions = [
  ...randomizeQuestions(advancedQuestions, totalAdvancedQuestions),
  ...randomizeQuestions(intermediateQuestions,totalIntermediateQuestions),
  ...randomizeQuestions(beginnerQuestions, totalBeginnerQuestions),
];

/**
 * Group the questions by difficulty
 */
const finalBeginnerQuestions = finalQuestions.filter(
  (q) => q.difficulty === "beginner",
);
const finalIntermediateQuestions = finalQuestions.filter(
  (q) => q.difficulty === "intermediate",
);
const finalAdvancedQuestions = finalQuestions.filter(
  (q) => q.difficulty === "advanced",
);

/**
 * Print the results
 */
console.log("Total", finalQuestions.length);
console.log("Beginner", finalBeginnerQuestions.length);
console.log("Intermediate", finalIntermediateQuestions.length);
console.log("Advanced", finalAdvancedQuestions.length);

/**
 * Verify no question is repeated
 */
console.log(
  "No repeated questions:",
  finalQuestions.length === new Set(finalQuestions).size,
);
console.log(
  "No repeated beginner questions:",
  finalBeginnerQuestions.length === new Set(finalBeginnerQuestions).size,
);
console.log(
  "No repeated intermediate questions:",
  finalIntermediateQuestions.length ===
    new Set(finalIntermediateQuestions).size,
);
console.log(
  "No repeated advanced questions:",
  finalAdvancedQuestions.length === new Set(finalAdvancedQuestions).size,
);
