import { combineReducers } from 'redux';

import board from './components/Board/reducers';
import players from './components/Players/reducers';
import settings from './components/Settings/reducers';

const appReducers = combineReducers({
  board,
  players,
  settings
});

export default appReducers;
