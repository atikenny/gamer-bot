import { combineReducers } from "redux";

import score from "./components/Score/reducers";
import board from "./components/Board/reducers";

const appReducers = combineReducers({
  score,
  board,
});

export default appReducers;
