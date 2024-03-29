import { addScore, resetScore } from '../Score/actions';

const moveUp = () => ({ type: 'MOVE_UP' });

const moveRight = () => ({ type: 'MOVE_RIGHT' });

const moveDown = () => ({ type: 'MOVE_DOWN' });

const moveLeft = () => ({ type: 'MOVE_LEFT' });

const getNumber = () => ({
  type: 'GET_NUMBER'
});

const moveAndGetNumber = (direction) => (dispatch, getState) => {
  switch (direction) {
    case 'UP':
      dispatch(moveUp());

      break;
    case 'RIGHT':
      dispatch(moveRight());

      break;
    case 'DOWN':
      dispatch(moveDown());

      break;
    case 'LEFT':
      dispatch(moveLeft());

      break;
    default:
      break;
  }

  window.requestAnimationFrame(() => {
    const { board } = getState();

    if (board.couldMove) {
      dispatch(getNumber());
    }

    if (board.summed !== 0) {
      dispatch(addScore({ score: board.summed }));
    }
  });
};

const startGame = () => ({
  type: 'START_GAME'
});

const resetGame = () => (dispatch) => {
  dispatch(startGame());

  window.requestAnimationFrame(() => {
    dispatch(resetScore());
  });
};

export { moveAndGetNumber, getNumber, resetGame };
