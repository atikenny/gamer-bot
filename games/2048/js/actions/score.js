export const addScore = ({ score }) => ({
  type: 'ADD_SCORE',
  score
});

export const resetScore = () => ({
  type: 'RESET_SCORE'
});
