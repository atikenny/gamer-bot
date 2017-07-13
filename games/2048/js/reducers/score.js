const score = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_SCORE':
            return state += action.score;
        default:
            return state;
    }
};

export default score;
