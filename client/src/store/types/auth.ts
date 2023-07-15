export type CurrentUserState = {
  id: string;
  email: string;
};

export interface AuthState {
  currentUser: CurrentUserState | {};
  isAuth: boolean;
}

export enum AuthActionTypes {
  SET_USER = 'SET_USER',
  LOGOUT = 'LOGOUT',
}

export interface SetUserAction {
  type: AuthActionTypes.SET_USER;
  payload?: {};
}

interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
}

export type AuthAction = SetUserAction | LogoutAction;
