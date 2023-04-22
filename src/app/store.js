import { configureStore } from '@reduxjs/toolkit';
import  useReducer  from '../features/userSlice';
export const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
