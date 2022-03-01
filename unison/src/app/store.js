import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import connectReducer from '../features/connections/connectSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    connect: connectReducer,
  },
})