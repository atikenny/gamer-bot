import React from "react";
import { connect } from "react-redux";

import "./styles";

import Row from "../Row/Row";
import Column from "../Column/Column";
import Tiles from "../Tiles/Tiles";

const Board = ({ notEnded }) => (
  <div id="board-container" className={notEnded ? "" : "ended"}>
    <div className="board">
      <Tiles />
      <Row>
        <Column />
        <Column />
        <Column />
        <Column />
      </Row>
      <Row>
        <Column />
        <Column />
        <Column />
        <Column />
      </Row>
      <Row>
        <Column />
        <Column />
        <Column />
        <Column />
      </Row>
      <Row>
        <Column />
        <Column />
        <Column />
        <Column />
      </Row>
    </div>
  </div>
);

const mapState = ({ board }) => {
  return {
    notEnded: board.notEnded,
  };
};

export default connect(mapState)(Board);
