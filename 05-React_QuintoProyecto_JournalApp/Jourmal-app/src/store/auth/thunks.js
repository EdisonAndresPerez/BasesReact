import { checkingCredentials, login, logout, } from "./";
import { singWithGoogle, registerUserWithEmailPassword  } from "../../firebase/providers";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const resul = await singWithGoogle();
    if (!resul.ok) return dispatch(logout(resul.errorMessage));

    dispatch(login(resul));
  };
};

export const startCreatingUserWithEmailPassword = ({ displayName, email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
   const  {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({displayName, email, password})
    if (!ok) return dispatch(logout(errorMessage));

    dispatch(login({uid, displayName, photoURL, email}))
  }

}
