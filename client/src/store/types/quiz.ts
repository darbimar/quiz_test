export interface QuestionState {
  question: string;
  options: string[];
  correctAnswer: string;
  totalCount: number;
}

export interface QuizState {
  questions: QuestionState[];
  loading: boolean;
  error: null | string;
  totalCount: number;
}

export enum QuizActionTypes {
  FETCH_QUESTIONS = 'FETCH_USERS',
  FETCH_QUESTIONS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_QUESTIONS_ERROR = 'FETCH_USERS_ERROR',
  FETCH_QUESTIONS_COUNT = 'FETCH_QUESTIONS_COUNT',
}

interface FetchQuestionsAction {
  type: QuizActionTypes.FETCH_QUESTIONS;
  payload?: string;
}

interface FetchQuestionsSuccesAction {
  type: QuizActionTypes.FETCH_QUESTIONS_SUCCESS;
  payload?: QuestionState[];
}

interface FetchQuestionsErrorAction {
  type: QuizActionTypes.FETCH_QUESTIONS_ERROR;
  payload?: string;
}

interface FetchTotalCountAction {
  type: QuizActionTypes.FETCH_QUESTIONS_COUNT;
  payload: number;
}

export type QuizAction =
  | FetchQuestionsAction
  | FetchQuestionsSuccesAction
  | FetchQuestionsErrorAction
  | FetchTotalCountAction;
