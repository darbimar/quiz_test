import { combineReducers } from 'redux';
import { quizReducer } from './quizReducer';
import { resultReducer } from './resultReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  quiz: quizReducer,
  result: resultReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
