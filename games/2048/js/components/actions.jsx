import React from "react";
import { connect } from "react-redux";

import "games/2048/styles/components/actions";

import Score from "./score";
import Restart from "./restart";

const Actions = ({ score }) => (
  <div id="actions-container">
    <Restart />
    <Score score={score.actualScore} title="score" />
    <Score score={score.maxScore} title="max score" />
  </div>
);

const mapState = ({ score }) => {
  return {
    score,
  };
};

export default connect(mapState)(Actions);
