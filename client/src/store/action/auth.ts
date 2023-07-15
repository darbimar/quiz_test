import { CurrentUserState } from 'store/types/auth';

export const setUser = (user: CurrentUserState) => {
  return { type: 'SET_USER', payload: user };
};

export const logout = () => {
  return { type: 'LOGOUT' };
};
