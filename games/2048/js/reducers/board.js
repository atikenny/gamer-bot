import {
    getRandomNumber,
    getRandomEmptyCell
} from '../services/game-service';

import { move } from '../services/move-service';

const getEmptyTiles = () => {
    return [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
};

const initialState = {
    couldMove: false,
    summed: 0,
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
            state = move('UP', state);

            return state;
        case 'MOVE_RIGHT':
            state = move('RIGHT', state);

            return state;
        case 'MOVE_DOWN':
            state = move('DOWN', state);

            return state;
        case 'MOVE_LEFT':
            state = move('LEFT', state);

            return state;
        case 'GET_NUMBER':
            return {
                couldMove: false,
                summed: 0,
                tiles: addRandomNumber(state.tiles)
            };
        case 'START_GAME':
            const tiles = getEmptyTiles();

            addRandomNumber(tiles);
            addRandomNumber(tiles);

            return {
                couldMove: false,
                summed: 0,
                tiles
            };
        default:
            return state;
    }
};

export default board;
