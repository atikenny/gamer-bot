import React from "react";
import { connect } from "react-redux";

import "./restart";

import { resetGame } from "../actions/board";

const Restart = ({ resetGame }) => (
  <button className="button restart-button" onClick={resetGame}>
    restart
  </button>
);

const mapDispatch = (dispatch) => {
  return {
    resetGame: () => {
      dispatch(resetGame());
    },
  };
};

export default connect(null, mapDispatch)(Restart);
