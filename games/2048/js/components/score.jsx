import React from "react";

import "./score";

const Score = ({ score, title }) => (
  <div className="score">
    <h3>{title}</h3>
    <div className="value">{score}</div>
  </div>
);

export default Score;
