import questions from "./questions";

/**
 * Picks 20 random questions from the question list, divided by difficulty level.
 * 
 * Total questions = 20
 * Split by level:
 * • 12 Easy (Beginner)
 * • 5 Medium (Intermediate)
 * • 3 Hard (Advanced)
 * 
 * @param questions - List of all available questions
 * @returns List of 20 selected questions
 */

/**
 * Using 'as const' instead of an enum has several advantages:
 * 
 * 1. Bundle Size: 'as const' is removed during compilation, while enums generate 
 *    additional JavaScript code that increases bundle size.
 * 
 * 2. Type Safety: 'as const' creates a more precise type where the values are 
 *    literal types, while enum values can be assigned any number/string.
 * 
 * 3. Tree-shaking: Since 'as const' generates no runtime code, unused values can be
 *    removed by tree-shaking, while enums always remain in the bundle.
 * 
 * 4. Simplicity: 'as const' is a simpler construct that just makes the object immutable,
 *    while enums add complexity with their special behavior and runtime presence.
 */
export const EQuestionDifficulty = {
  beginner: "beginner",
  intermediate: "intermediate",
  advanced: "advanced",
} as const;

/**
 * This type definition creates a union type from the values of EQuestionDifficulty.
 * 
 * The process:
 * 1. typeof EQuestionDifficulty - gets the type of the const object
 * 2. keyof typeof EQuestionDifficulty - gets a union of the keys ("beginner" | "intermediate" | "advanced")
 * 3. typeof EQuestionDifficulty[keyof typeof EQuestionDifficulty] - gets the values at those keys
 * 
 * The resulting type is equivalent to: type TQuestionDifficulty = "beginner" | "intermediate" | "advanced"
 */
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