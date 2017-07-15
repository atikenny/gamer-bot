import {
    getRandomNumber,
    getRandomEmptyCell
} from '../services/game-service';

import { move } from '../services/move-service';

const initialState = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

const addRandomNumber = (board) => {
    const newBoard = board.slice();
    const randomNumber = getRandomNumber();
    const randomEmptyCell = getRandomEmptyCell(newBoard);

    newBoard[randomEmptyCell.row][randomEmptyCell.column] = randomNumber;

    return newBoard;
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
            return addRandomNumber(state);
        case 'START_GAME':
            state = initialState;
            state = addRandomNumber(state);
            state = addRandomNumber(state);

            return state;
        default:
            return state;
    }
};

export default board;
