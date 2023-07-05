import { QuizAction, QuizActionTypes, QuizState } from 'store/types/quiz';

const initialState: QuizState = {
  questions: [],
  loading: false,
  error: null,
};

export const quizReducer = (state = initialState, action: QuizAction): QuizState => {
  switch (action.type) {
    case QuizActionTypes.FETCH_QUESTIONS:
      return { questions: [], loading: true, error: null };
    case QuizActionTypes.FETCH_QUESTIONS_SUCCESS:
      return { questions: action.payload, loading: false, error: null };
    case QuizActionTypes.FETCH_QUESTIONS_ERROR:
      return { questions: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
