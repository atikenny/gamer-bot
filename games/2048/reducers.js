import { combineReducers } from "redux";

import score from "./components/Score/reducers";
import board from "./components/Board/reducers";
import bots from "./components/Bots/reducers";

const appReducers = combineReducers({
  score,
  board,
  bots,
});

export default appReducers;
