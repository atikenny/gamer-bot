import bots from '../../../../bots';
import scoreReducers from '../Score/reducers';

const initialState = [
  ...bots.map(({ name }) => ({
    name,
    isSelected: name === 'Bruce' // select Bruce by default
  })),
  {
    name: 'You'
  }
];

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAYERS.CHOOSE':
      return state.map((player) => ({
        ...player,
        isSelected: player.name === action.name,
        score: scoreReducers(player.score, action)
      }));
    case 'PLAYERS.PLAY':
      const selectedBot = bots.find((bot) => bot.name === action.name);

      if (selectedBot) {
        selectedBot.play(state, action.moveIntervalMS);
      }

      return state;
    case 'PLAYERS.STOP':
      const selectedPlayer = state.find(({ isSelected }) => isSelected);
      const stop = bots.find((bot) => bot.name === selectedPlayer.name)?.stop;

      if (stop) {
        stop();
      }

      return state;
    default:
      return state.map((player) => ({
        ...player,
        score: player.isSelected ? scoreReducers(player.score, action) : player.score
      }));
  }
};

export default reducers;
