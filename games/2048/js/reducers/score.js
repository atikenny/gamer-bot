const score = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_SCORE':
            return state += action.score;
        case 'RESET_SCORE':
            return 0;
        default:
            return state;
    }
};

export default score;
