import { getRandomNumber, getRandomEmptyCell } from '../Game/service';
import { move } from '../../services/move-service';

const getEmptyTiles = () => [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

const initialState = {
  couldMove: false,
  summed: 0,
  notEnded: true,
  tiles: getEmptyTiles()
};

const addRandomNumber = (tiles) => {
  const newTiles = tiles.slice();
  const randomNumber = getRandomNumber();
  const randomEmptyCell = getRandomEmptyCell(newTiles);

  newTiles[randomEmptyCell.row][randomEmptyCell.column] = randomNumber;

  return newTiles;
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_UP':
      return move('UP', state);
    case 'MOVE_RIGHT':
      return move('RIGHT', state);
    case 'MOVE_DOWN':
      return move('DOWN', state);
    case 'MOVE_LEFT':
      return move('LEFT', state);
    case 'GET_NUMBER':
      return Object.assign({}, state, {
        tiles: addRandomNumber(state.tiles)
      });
    case 'START_GAME':
      const tiles = getEmptyTiles();

      addRandomNumber(tiles);
      addRandomNumber(tiles);

      return Object.assign({}, initialState, {
        tiles
      });
    default:
      return state;
  }
};

export default board;
