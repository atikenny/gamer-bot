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

const moveRight = () => {
    return {
        type: 'MOVE_RIGHT'
    };
};

export const moveRightAndGetNumber = () => {
    return dispatch => {
        dispatch(moveRight());

        setTimeout(() => {
            dispatch(getNumber());
        }, 0);
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

const moveLeft = () => {
    return {
        type: 'MOVE_LEFT'
    };
};

export const moveLeftAndGetNumber = () => {
    return dispatch => {
        dispatch(moveLeft());

        setTimeout(() => {
            dispatch(getNumber());
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
