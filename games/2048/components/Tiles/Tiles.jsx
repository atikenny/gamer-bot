import { useSelector } from 'react-redux';
import classnames from 'classnames';

import './styles';

const gutterSize = 12;
const cellSize = 100;
const getTransform = (rowIndex, columnIndex) => {
  const x = columnIndex * cellSize + columnIndex * gutterSize;
  const y = rowIndex * cellSize + rowIndex * gutterSize;

  return {
    transform: `translate(${x}px, ${y}px)`
  };
};

const Tiles = () => {
  const tiles = useSelector((state) => state.board.tiles);

  return (
    <div className="tiles">
      {tiles.map((row, rowIndex) =>
        row.map(
          (number, columnIndex) =>
            (number && (
              <span
                key={`tile-${rowIndex}-${columnIndex}`}
                className={classnames('tile', {
                  'tile-super': number > 2048,
                  [`tile-${number}`]: number <= 2048
                })}
                style={getTransform(rowIndex, columnIndex)}
              >
                {number}
              </span>
            )) ||
            null
        )
      )}
    </div>
  );
};

export default Tiles;
