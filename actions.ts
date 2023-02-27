import { DECREMENTED, INCREMENTED, INCREMENTED_BY_10 } from './constants';

export const incremented = () => ({
  type: INCREMENTED,
});

export const decremented = () => ({
  type: DECREMENTED,
});

export const incrementedBy10 = (payload) => ({
  type: INCREMENTED_BY_10,
  payload,
});
