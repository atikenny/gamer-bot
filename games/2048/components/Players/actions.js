const selectPlayer = (name) => ({
  type: 'PLAYERS.CHOOSE',
  name
});

const play = (name) => ({
  type: 'PLAYERS.PLAY',
  name
});

const stop = () => ({
  type: 'PLAYERS.STOP'
});

export { selectPlayer, play, stop };
