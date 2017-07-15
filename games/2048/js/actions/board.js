const moveUp = () => {
    return {
        type: 'MOVE_UP'
    };
};

export const moveUpAndGetNumber = () => {
    return dispatch => {
        dispatch(moveUp());

        setTimeout(() => {
            dispatch(getNumber());
        }, 0);
    };
};

export const moveRight = () => {
    return {
        type: 'MOVE_RIGHT'
    };
};

const moveDown = () => {
    return {
        type: 'MOVE_DOWN'
    };
};

export const moveDownAndGetNumber = () => {
    return dispatch => {
        dispatch(moveDown());

        setTimeout(() => {
            dispatch(getNumber());
        }, 0);
    };
};

export const moveLeft = () => {
    return {
        type: 'MOVE_LEFT'
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
