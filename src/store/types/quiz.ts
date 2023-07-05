export interface QuestionState {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizState {
  questions: QuestionState[];
  loading: boolean;
  error: null | string;
}

export enum QuizActionTypes {
  FETCH_QUESTIONS = 'FETCH_USERS',
  FETCH_QUESTIONS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_QUESTIONS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchQuestionsAction {
  type: QuizActionTypes.FETCH_QUESTIONS;
  payload?: any;
}

interface FetchQuestionsSuccesAction {
  type: QuizActionTypes.FETCH_QUESTIONS_SUCCESS;
  payload?: any[];
}

interface FetchQuestionsErrorAction {
  type: QuizActionTypes.FETCH_QUESTIONS_ERROR;
  payload?: string;
}

export type QuizAction =
  | FetchQuestionsAction
  | FetchQuestionsSuccesAction
  | FetchQuestionsErrorAction;
