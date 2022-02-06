const selectPlayer = (name) => ({
  type: 'PLAYERS.CHOOSE',
  name
});

const play = (state, moveIntervalMS) => ({
  type: 'PLAYERS.PLAY',
  moveIntervalMS,
  state
});

const stop = () => ({
  type: 'PLAYERS.STOP'
});

export { selectPlayer, play, stop };
