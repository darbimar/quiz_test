import { combineReducers } from 'redux';
import { quizReducer } from './quizReducer';
import { resultReducer } from './resultReducer';

export const rootReducer = combineReducers({
  quiz: quizReducer,
  result: resultReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
