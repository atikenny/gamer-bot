import React from "react";
import { connect } from "react-redux";

import "./styles";

const gutterSize = 12;
const cellSize = 100;
const getTransform = (rowIndex, columnIndex) => {
  const x = columnIndex * cellSize + columnIndex * gutterSize;
  const y = rowIndex * cellSize + rowIndex * gutterSize;

  return {
    transform: `translate(${x}px, ${y}px)`,
  };
};

const Tiles = ({ tiles }) => (
  <div id="tiles">
    {tiles.map((row, rowIndex) =>
      row.map((number, columnIndex) => {
        let tileClassName = `tile`;
        const style = getTransform(rowIndex, columnIndex);

        if (number > 2048) {
          tileClassName += " tile-super";
        } else {
          tileClassName += ` tile-${number}`;
        }

        if (number) {
          return (
            <span
              key={`tile-${rowIndex}-${columnIndex}`}
              className={tileClassName}
              style={style}
            >
              {number}
            </span>
          );
        } else {
          return null;
        }
      })
    )}
  </div>
);

const mapState = ({ board }) => {
  return {
    tiles: board.tiles,
  };
};

export default connect(mapState)(Tiles);
