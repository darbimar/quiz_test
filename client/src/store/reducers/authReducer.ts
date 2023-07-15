import { AuthAction, AuthActionTypes, AuthState } from 'store/types/auth';

const initialState: AuthState = {
  currentUser: {},
  isAuth: false,
};

export const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.SET_USER:
      return { ...state, currentUser: action.payload, isAuth: true };
    case AuthActionTypes.LOGOUT:
      localStorage.removeItem('token');
      return { ...state, currentUser: {}, isAuth: false };
    default:
      return state;
  }
};
