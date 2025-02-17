import { IQuestion } from '../generateQuestions';



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


