import axios from 'axios';
import { AppDispatch } from 'store';
import { setNotification, setUser } from 'store/action/auth';

export const registration = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`https://quiz-test-wyyb.vercel.app/api/auth/registration`, {
        email,
        password,
      });
      dispatch(setNotification(response.data.message));
    } catch (error) {
      dispatch(setNotification(error.response.data.message));
    }
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`https://quiz-test-wyyb.vercel.app/api/auth/login`, {
        email,
        password,
      });

      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      dispatch(setNotification(error.response.data.message));
    }
  };
};

export const auth = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`https://quiz-test-wyyb.vercel.app/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      dispatch(setNotification(error.response.data.message));
    }
  };
};
