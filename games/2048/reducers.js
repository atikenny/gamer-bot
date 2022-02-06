import { combineReducers } from "redux";

import board from "./components/Board/reducers";
import players from "./components/Players/reducers";

const appReducers = combineReducers({
  board,
  players,
});

export default appReducers;
