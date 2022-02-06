const selectPlayer = (name) => ({
  type: 'PLAYERS.CHOOSE',
  name
});

const play = (name) => ({
  type: 'PLAYERS.PLAY',
  name
});

export { selectPlayer, play };
