import { configureStore } from '@reduxjs/toolkit'
import {authSlice} from './auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  }
})