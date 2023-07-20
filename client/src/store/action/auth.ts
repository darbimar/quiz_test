import { AuthActionTypes, CurrentUserState } from 'store/types/auth';
import { ResultActionTypes } from 'store/types/result';

export const setUser = (user: CurrentUserState) => {
  return { type: AuthActionTypes.SET_USER, payload: user };
};

export const logout = () => {
  return { type: AuthActionTypes.LOGOUT };
};

export const setNotification = (message: string) => {
  return { type: AuthActionTypes.SET_NOTIFICATION, payload: message };
};
