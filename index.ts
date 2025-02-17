import questions from "./questions";
import { generateQuestions } from "./generateQuestions";

// Generate and group questions by difficulty
const finalQuestions = generateQuestions(questions);

const finalBeginnerQuestions = finalQuestions.filter(
  (q) => q.difficulty === "beginner"
);
const finalIntermediateQuestions = finalQuestions.filter(
  (q) => q.difficulty === "intermediate"
);
const finalAdvancedQuestions = finalQuestions.filter(
  (q) => q.difficulty === "advanced"
);


const REQUIRED_BEGINNER_QUESTIONS = 12;
const REQUIRED_INTERMEDIATE_QUESTIONS = 5;
const REQUIRED_ADVANCED_QUESTIONS = 3;

// Check for duplicates
console.log("\n=== Duplicate Checks ===");
console.log(
  "All questions unique:",
  finalQuestions.length === new Set(finalQuestions).size ? "✅" : "❌"
);
console.log(
  "Beginner questions unique:",
  finalBeginnerQuestions.length === new Set(finalBeginnerQuestions).size ? "✅" : "❌"
);
console.log(
  "Intermediate questions unique:",
  finalIntermediateQuestions.length === new Set(finalIntermediateQuestions).size ? "✅" : "❌"
);
console.log(
  "Advanced questions unique:",
  finalAdvancedQuestions.length === new Set(finalAdvancedQuestions).size ? "✅" : "❌"
);

// Verify each difficulty level has the correct number of questions
console.log("\n=== Difficulty Level Checks ===");
console.log(
  "Total Questions:",
  finalQuestions.length === REQUIRED_BEGINNER_QUESTIONS + REQUIRED_INTERMEDIATE_QUESTIONS + REQUIRED_ADVANCED_QUESTIONS ? "✅" : `❌ (${finalQuestions.length}/${REQUIRED_BEGINNER_QUESTIONS + REQUIRED_INTERMEDIATE_QUESTIONS + REQUIRED_ADVANCED_QUESTIONS})`
);
console.log(
  `Has ${REQUIRED_BEGINNER_QUESTIONS} beginner questions:`,
  finalBeginnerQuestions.length === REQUIRED_BEGINNER_QUESTIONS ? "✅" : `❌ (${finalBeginnerQuestions.length}/${REQUIRED_BEGINNER_QUESTIONS})`
);
console.log(
  `Has ${REQUIRED_INTERMEDIATE_QUESTIONS} intermediate questions:`,
  finalIntermediateQuestions.length === REQUIRED_INTERMEDIATE_QUESTIONS ? "✅" : `❌ (${finalIntermediateQuestions.length}/${REQUIRED_INTERMEDIATE_QUESTIONS})`
);
console.log(
  `Has ${REQUIRED_ADVANCED_QUESTIONS} advanced questions:`,
  finalAdvancedQuestions.length === REQUIRED_ADVANCED_QUESTIONS ? "✅" : `❌ (${finalAdvancedQuestions.length}/${REQUIRED_ADVANCED_QUESTIONS})`
);
