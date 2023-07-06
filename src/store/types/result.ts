export interface ResultState {
  correctAnswers: number;
  incorrectAnswers: number;
  showResult: boolean;
}

export enum ResultActionTypes {
  ADD_CORRECT_ANSWER = 'ADD_CORRECT_ANSWER',
  ADD_INCORRECT_ANSWER = 'ADD_INCORRECT_ANSWER',
  SHOW_RESULT = 'SHOW_RESULT',
}

interface AddCorrectAnswerAction {
  type: ResultActionTypes.ADD_CORRECT_ANSWER;
  payload: number;
}

interface AddIncorrectAnswerAction {
  type: ResultActionTypes.ADD_INCORRECT_ANSWER;
  payload: number;
}

interface ShowResultAction {
  type: ResultActionTypes.SHOW_RESULT;
}

export type ResultAction = AddCorrectAnswerAction | AddIncorrectAnswerAction | ShowResultAction;
