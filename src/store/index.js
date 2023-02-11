import { createStore } from 'redux';

const initState = { counter: 0, showCounter: true };

const couenterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, counter: state.counter + action.payload };
    case 'decrease':
      return { ...state, counter: state.counter - action.payload };
    case 'show/hide':
      return { ...state, showCounter: action.payload };
    default:
      return state;
  }
};

export const store = createStore(couenterReducer);
