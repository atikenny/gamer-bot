import {
    getRandomNumber,
    getRandomEmptyCell
} from '../services/game-service';

import {
    moveUp
} from '../services/move-service';

const initialState = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

const addRandomNumber = (board) => {
    const randomNumber = getRandomNumber();
    const randomEmptyCell = getRandomEmptyCell(board);

    board[randomEmptyCell.row][randomEmptyCell.column] = randomNumber;

    return board;
};

const board = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVE_UP':
            state = moveUp(state);

            return state;
        case 'MOVE_RIGHT':
            return state;
        case 'MOVE_DOWN':
            return state;
        case 'MOVE_LEFT':
            return state;
        case 'GET_NUMBER':
            state = addRandomNumber(state);

            return state;
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
