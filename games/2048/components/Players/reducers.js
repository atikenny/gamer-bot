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
        selectedBot.play(state);
      }

      return state;
    default:
      return state.map((player) => ({
        ...player,
        score: scoreReducers(player.score, action)
      }));
  }
};

export default reducers;
