export type CurrentUserState = {
  id: string;
  email: string;
};

export interface AuthState {
  currentUser: CurrentUserState | {};
  isAuth: boolean;
  notificationMessage: string;
}

export enum AuthActionTypes {
  SET_USER = 'SET_USER',
  LOGOUT = 'LOGOUT',
  SET_NOTIFICATION = 'SET_NOTIFICATION',
}

export interface SetUserAction {
  type: AuthActionTypes.SET_USER;
  payload?: {};
}

interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
}

interface SetNotificationAction {
  type: AuthActionTypes.SET_NOTIFICATION;
  payload: string;
}

export type AuthAction = SetUserAction | LogoutAction | SetNotificationAction;
