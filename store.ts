import { createStore, combineReducers } from 'redux';

const counterReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    case 'counter/increment10':
      return { value: state.value + action.payload };
    default:
      return state;
  }
};

const userReducer = (state = {}, action) => state;

export const store = createStore(
  combineReducers({
    counter: counterReducer,
    user: userReducer,
  })
);

export const selectValue = () => store.getState().counter.value;
