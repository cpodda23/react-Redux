import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectValue } from './store';

export const Display = () => {
  const value = useSelector(selectValue);

  return <div>{value}</div>;
};
