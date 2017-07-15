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

        setTimeout(() => {
            const { board } = getState();

            if (board.couldMove) {
                dispatch(getNumber());
            }
        }, 0);
    };
};

export const getNumber = () => {
    return {
        type: 'GET_NUMBER'
    };
};

export const startGame = () => {
    return {
        type: 'START_GAME'
    };
};
