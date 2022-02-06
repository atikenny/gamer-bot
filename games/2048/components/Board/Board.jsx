import { useSelector } from 'react-redux';
import classnames from 'classnames';

import './styles';

import Row from '../Row/Row';
import Column from '../Column/Column';
import Tiles from '../Tiles/Tiles';

const Board = () => {
  const notEnded = useSelector((state) => state.board.notEnded);

  return (
    <div
      className={classnames('board-container', {
        ended: !notEnded
      })}
    >
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
