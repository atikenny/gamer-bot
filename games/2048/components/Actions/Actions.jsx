import React from "react";
import { useSelector } from "react-redux";

import "./styles";

import Score from "../Score/Score";
import Restart from "../Restart/Restart";

const Actions = () => {
  const score = useSelector(
    (state) => state.players.find((player) => player.isSelected).score
  );

  return (
    <div className="actions-container">
      <Restart />
      <Score score={score.actualScore} title="score" />
      <Score score={score.maxScore} title="max score" />
    </div>
  );
};

export default Actions;
