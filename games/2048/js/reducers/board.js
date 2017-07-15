const initialState = [];

const board = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVE_UP':
            return state;
        case 'MOVE_RIGHT':
            return state;
        case 'MOVE_DOWN':
            return state;
        case 'MOVE_LEFT':
            return state;
        default:
            return state;
    }
};

export default board;
