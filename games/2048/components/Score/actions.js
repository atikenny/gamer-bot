const addScore = ({ score }) => ({
  type: 'ADD_SCORE',
  score
});

const resetScore = () => ({
  type: 'RESET_SCORE'
});

export { addScore, resetScore };
