import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', // 'checking', 'authenticated', 'not-authenticated'
    uid: null,
    email: null,
    displayName: null, 
    photoURL : null,
    errorMessage: null,
  },
  reducers: {
    login:(state, {payload}) => {
      // lógica de login aquí
        state.status = 'authenticated', 
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName; 
      state.photoURL = payload.photoURL;
      state.errorMessage = payload.errorMessage;
    },
    logout:(state, {payload}) => {
      // lógica de logout aquí
      state.status = 'not-authenticated', 
      state.uid = null;
      state.email = null;
      state.displayName = null; 
      state.photoURL = null;
      state.errorMessage = payload.errorMessage;
    },
    checkingCredentials:(state) => {
      // lógica de checkingCredentials aquí
      state.status = 'checking';
    }
  }

});

export const {login, logout, checkingCredentials } = authSlice.actions;
export default authSlice.reducer;
