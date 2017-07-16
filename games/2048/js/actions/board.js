import { addScore, resetScore } from './score';

const moveUp = () => ({ type: 'MOVE_UP' });

const moveRight = () => ({ type: 'MOVE_RIGHT' });

const moveDown = () => ({ type: 'MOVE_DOWN' });

const moveLeft = () => ({ type: 'MOVE_LEFT' });

export const moveAndGetNumber = (direction) => {
    return (dispatch, getState) => {
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
};

export const getNumber = () => {
    return {
        type: 'GET_NUMBER'
    };
};

const startGame = () => {
    return {
        type: 'START_GAME'
    };
};

export const resetGame = () => {
    return dispatch => {
        dispatch(startGame());

        window.requestAnimationFrame(() => {
            dispatch(resetScore());
        });
    };
};
