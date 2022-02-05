const initialState = {
  actualScore: 0,
  maxScore: 0,
};

const score = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SCORE":
      const actualScore = state.actualScore + action.score;

      return {
        actualScore,
        maxScore: actualScore > state.maxScore ? actualScore : state.maxScore,
      };
    case "RESET_SCORE":
      return {
        actualScore: 0,
        maxScore: state.maxScore,
      };
    default:
      return state;
  }
};

export default score;
