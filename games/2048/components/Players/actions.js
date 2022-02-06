const selectPlayer = (name) => ({
  type: 'PLAYERS.CHOOSE',
  name
});

const play = (name, moveIntervalMS) => ({
  type: 'PLAYERS.PLAY',
  name,
  moveIntervalMS
});

const stop = () => ({
  type: 'PLAYERS.STOP'
});

export { selectPlayer, play, stop };
