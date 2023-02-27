import * as React from 'react';
import { Provider } from 'react-redux';
import { Counter } from './Counter';
import { Display } from './Display';
import { store } from './store';
import './style.css';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Display />
        <Counter />
      </div>
    </Provider>
  );
}
