import axios from 'axios';
import { AppDispatch } from 'store';
import { QuizActionTypes } from 'store/types/quiz';

export const fetchQuestions = (limit: number, page: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: QuizActionTypes.FETCH_QUESTIONS });
      const url = 'http://localhost:3001/questions';
      const response1 = await axios.get(url, {
        params: {
          _limit: limit,
          _page: page,
        },
      });
      setTimeout(() => {
        dispatch({ type: QuizActionTypes.FETCH_QUESTIONS_SUCCESS, payload: response1.data });
      }, 500);
      const response2 = await axios.get(url);
      dispatch({ type: QuizActionTypes.FETCH_QUESTIONS_COUNT, payload: response2.data.length });
    } catch (error) {
      dispatch({
        type: QuizActionTypes.FETCH_QUESTIONS_ERROR,
        payload: 'Произошла ошибка при загрузке вопросов',
      });
    }
  };
};
