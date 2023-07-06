import { ResultActionTypes, ResultAction, ResultState } from 'store/types/result';

const initialState: ResultState = {
  correctAnswers: 0,
  incorrectAnswers: 0,
  showResult: false,
};

export const resultReducer = (state = initialState, action: ResultAction): ResultState => {
  switch (action.type) {
    case ResultActionTypes.ADD_CORRECT_ANSWER:
      return {
        ...state,
        correctAnswers: state.correctAnswers + action.payload,
      };
    case ResultActionTypes.ADD_INCORRECT_ANSWER:
      return {
        ...state,
        incorrectAnswers: state.incorrectAnswers + action.payload,
      };
    case ResultActionTypes.SHOW_RESULT:
      return {
        ...state,
        showResult: true,
      };
    default:
      return state;
  }
};
