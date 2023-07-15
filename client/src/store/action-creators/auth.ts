import axios from 'axios';
import { AppDispatch } from 'store';
import { setUser } from 'store/action/auth';

export const registration = async (email: string, password: string) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
      email,
      password,
    });
    alert(response.data.message);
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const login = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/login`, {
        email,
        password,
      });

      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};

export const auth = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      alert(e.response.data.message);
      localStorage.removeItem('token');
    }
  };
};