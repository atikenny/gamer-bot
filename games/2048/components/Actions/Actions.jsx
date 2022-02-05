import React from "react";
import { connect } from "react-redux";

import "./styles";

import Score from "../Score/Score";
import Restart from "../Restart/Restart";

const Actions = ({ score }) => (
  <div className="actions-container">
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
