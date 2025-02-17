import { IQuestion } from '../generateQuestions';

/**
 * An optimized implementation for selecting questions based on difficulty levels.
 * This version:
 * - Uses a single pass to group questions
 * - Employs efficient array operations
 * - Includes error handling
 * - Avoids global state
 * - Returns a total of 20 questions:
 *   - 3 advanced
 *   - 5 intermediate
 *   - 12 beginner
 */

export const generateQuestions = (questions: Array<IQuestion>) => {
  const difficultyRequirements = {
    advanced: 3,
    intermediate: 5,
    beginner: 12
  };

  // Group questions by difficulty using a single pass through the array
  const questionsByDifficulty = questions.reduce((acc, question) => {
    acc[question.difficulty] = acc[question.difficulty] || [];
    acc[question.difficulty].push(question);
    return acc;
  }, {} as Record<string, IQuestion[]>);

  // Helper function to get random items from an array
  const getRandomItems = (arr: IQuestion[], count: number): IQuestion[] => {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  // Get questions for each difficulty level and combine them
  return Object.entries(difficultyRequirements).flatMap(([difficulty, count]) => {
    const availableQuestions = questionsByDifficulty[difficulty] || [];
    if (availableQuestions.length < count) throw new Error(`Not enough ${difficulty} questions available`);
    return getRandomItems(availableQuestions, count);
  });
}; 