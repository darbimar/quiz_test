import { AuthAction, AuthActionTypes, AuthState } from 'store/types/auth';

const initialState: AuthState = {
  currentUser: {},
  isAuth: false,
  notificationMessage: '',
};

export const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.SET_USER:
      return { ...state, currentUser: action.payload, isAuth: true };
    case AuthActionTypes.LOGOUT:
      localStorage.removeItem('token');
      return { ...state, currentUser: {}, isAuth: false };
    case AuthActionTypes.SET_NOTIFICATION:
      return { ...state, notificationMessage: action.payload };
    default:
      return state;
  }
};
