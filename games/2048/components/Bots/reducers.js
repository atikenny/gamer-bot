import bots from "../../../../bots";

const initialState = bots.map((bot) => {
  if (bot.name === "Bruce") {
    return {
      ...bot,
      isSelected: true,
    };
  }

  return {
    ...bot,
  };
});

const botsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "BOTS.CHOOSE":
      return bots.map((bot) => ({
        ...bot,
        isSelected: bot.name === action.name,
      }));
    default:
      return state;
  }
};

export default botsReducers;
