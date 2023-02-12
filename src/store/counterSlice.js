import { createSlice } from '@reduxjs/toolkit';

const initState = { counter: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.counter += action.payload;
    },

    decrease: (state, action) => {
      state.counter -= action.payload;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;

/*
- import the createSlice API from Redux Toolkit.
- Creating a slice requires a string name to identify the slice, an initial state value, 
and one or more reducer functions to define how the state can be updated.
Once a slice is created, we can export the generated Redux action creators and the reducer
function for the whole slice.
- Redux requires that we write all state updates immutably, by making copies of data and updating the copies.
  However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating"
  update logic that becomes correct immutable updates.
*/
