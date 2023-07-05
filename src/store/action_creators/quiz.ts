import axios from 'axios';
import { Dispatch } from 'react';
import { QuizAction, QuizActionTypes } from 'store/types/quiz';

export const fetchQuestions = (): ((dispatch: Dispatch<QuizAction>) => Promise<void>) => {
  return async (dispatch: Dispatch<QuizAction>) => {
    try {
      dispatch({ type: QuizActionTypes.FETCH_QUESTIONS });
      const url = 'http://localhost:3001/questions';
      const response = await axios.get(url);
      setTimeout(() => {
        dispatch({ type: QuizActionTypes.FETCH_QUESTIONS_SUCCESS, payload: response.data });
      }, 500);
    } catch (error) {
      dispatch({
        type: QuizActionTypes.FETCH_QUESTIONS_ERROR,
        payload: 'Произошла ошибка при загрузке вопросов',
      });
    }
  };
};
