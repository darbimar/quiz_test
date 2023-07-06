import { ResultAction, ResultActionTypes } from 'store/types/result';

export const selectCorrectAnswer = (count: number): ResultAction => {
  return { type: ResultActionTypes.ADD_CORRECT_ANSWER, payload: count };
};

export const selectIncorrectAnswer = (count: number): ResultAction => {
  return { type: ResultActionTypes.ADD_INCORRECT_ANSWER, payload: count };
};

export const showQuizResult = (): ResultAction => {
  return { type: ResultActionTypes.SHOW_RESULT };
};
