import { combineReducers } from 'redux';

import score from './score';
import board from './board';

const appReducers = combineReducers({
  score,
  board
});

export default appReducers;
