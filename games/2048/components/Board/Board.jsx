import React from "react";
import { useSelector } from "react-redux";

import "./styles";

import Row from "../Row/Row";
import Column from "../Column/Column";
import Tiles from "../Tiles/Tiles";

const Board = () => {
  const notEnded = useSelector((state) => state.board.notEnded);

  return (
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
};

export default Board;
