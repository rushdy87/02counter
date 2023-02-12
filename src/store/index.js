import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export { increase, decrease } from './counterSlice';
export { logIn, logOut } from './authSlice';

/*

- configureStore creates a Redux store, and also automatically configure the Redux DevTools extension so that you
  can inspect the store while developing

 */
