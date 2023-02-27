import * as React from 'react';
import { useDispatch } from 'react-redux';
import { decremented, incremented, incrementedBy10 } from './actions';

export const Counter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(incremented())}>increment</button>
      <button onClick={() => dispatch(incrementedBy10(10))}>increment10</button>
      <button onClick={() => dispatch(decremented())}>decrement</button>
    </div>
  );
};
