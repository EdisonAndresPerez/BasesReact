import { createContext, useContext, useReducer } from 'react';
import { types } from '../types/types';
const AuthContext = createContext();



// Lee el usuario de localStorage al iniciar
const userFromStorage = JSON.parse(localStorage.getItem('user'));
const initialState = {
  isAuthenticated: !!userFromStorage,
  user: userFromStorage || null
};

function authReducer(state, action) {
    switch(action.type){
        case types.login:
            localStorage.setItem('user', JSON.stringify(action.payload));
            return {isAuthenticated: true, user: action.payload};
        case types.logout:
            localStorage.removeItem('user');
            return {isAuthenticated: false, user: null};
        default:
            return state;
    }
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userData) => {
    return new Promise((resolve) => {
      dispatch({ type: types.login, payload: userData });
      resolve();
    });
  };

  const logout = () => {
    dispatch({ type: types.logout });
  };

  const value = {
    isAuthenticated:  state.isAuthenticated,
    user: state.user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
