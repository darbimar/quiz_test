import { QuizAction, QuizActionTypes, QuizState } from 'store/types/quiz';

const initialState: QuizState = {
  questions: [],
  loading: false,
  error: null,
  totalCount: 0,
};

export const quizReducer = (state = initialState, action: QuizAction): QuizState => {
  switch (action.type) {
    case QuizActionTypes.FETCH_QUESTIONS:
      return { ...state, questions: [], loading: true, error: null };
    case QuizActionTypes.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        loading: false,
        error: null,
      };
    case QuizActionTypes.FETCH_QUESTIONS_ERROR:
      return { ...state, questions: [], loading: false, error: action.payload };
    case QuizActionTypes.FETCH_QUESTIONS_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };

    default:
      return state;
  }
};
