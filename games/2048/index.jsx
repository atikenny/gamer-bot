import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import './index.scss';

import appReducers from './reducers';

import GameContainer from './components/GameContainer/GameContainer';
import Game from './components/Game/Game';
import { getKeypressHandler } from './components/Board/service';
import { resetGame } from './components/Board/actions';
import { scheduleSaveState, loadState } from './services/storage-service';
import { play } from './components/Players/actions';

const savedState = loadState();

const store = createStore(appReducers, savedState, composeWithDevTools(applyMiddleware(thunk)));

if (!savedState) {
  store.dispatch(resetGame());
}

ReactDOM.render(
  <Provider store={store}>
    <GameContainer>
      <Game />
    </GameContainer>
  </Provider>,
  document.querySelector('body')
);

const keypressHandler = getKeypressHandler(store.dispatch);

document.addEventListener('keyup', keypressHandler);

store.subscribe(() => {
  const state = store.getState();

  scheduleSaveState(state);

  if (!state.board.notEnded) {
    document.removeEventListener('keyup', keypressHandler);
  } else if (state.board.notEnded) {
    document.addEventListener('keyup', keypressHandler);
  }
});

store.dispatch(play(store.getState().settings.moveIntervalMS));
