import React from "react";
import { connect } from "react-redux";

import "./styles";

import { resetGame } from "../Board/actions";
import Button from "../Button/Button";

const Restart = ({ resetGame }) => (
  <Button className="restart-button" onClick={resetGame}>
    restart
  </Button>
);

const mapDispatch = (dispatch) => {
  return {
    resetGame: () => {
      dispatch(resetGame());
    },
  };
};

export default connect(null, mapDispatch)(Restart);
