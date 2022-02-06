import bots from "../../../../bots";

const selectPlayer = (name) => ({
  type: "PLAYERS.CHOOSE",
  name,
});

const play = (name) => ({
  type: "PLAYERS.PLAY",
});

export { selectPlayer, play };
