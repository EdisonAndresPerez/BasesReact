import { checkingCredentials } from "./";
import { singWithGoogle } from "../../firebase/providers";


export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};


export const startGoogleSignIn = () => {
      return async (dispatch) => {
    dispatch(checkingCredentials());

    dispatch(checkingCredentials());
    const resul = await singWithGoogle()
    



  };
}