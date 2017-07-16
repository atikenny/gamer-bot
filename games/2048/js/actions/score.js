export const addScore = ({ score }) => {
    return {
        type: 'ADD_SCORE',
        score
    };
};

export const resetScore = () => {
    return {
        type: 'RESET_SCORE'
    };
};
