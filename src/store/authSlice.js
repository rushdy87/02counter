import { createSlice } from '@reduxjs/toolkit';

const authSice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false },
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
    },

    logOut: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export default authSice.reducer;
export const { logIn, logOut } = authSice.actions;
