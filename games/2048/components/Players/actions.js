const selectPlayer = (name) => ({
  type: 'PLAYERS.CHOOSE',
  name
});

const play = (moveIntervalMS) => ({
  type: 'PLAYERS.PLAY',
  moveIntervalMS
});

const stop = () => ({
  type: 'PLAYERS.STOP'
});

export { selectPlayer, play, stop };
