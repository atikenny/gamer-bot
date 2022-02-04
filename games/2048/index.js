import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import './styles/main';

import appReducers from './js/reducers';

import GameContainer from './js/components/game-container';
import Game from './js/components/game';
import { getKeypressHandler } from './js/services/board-service';
import { resetGame } from './js/actions/board';
import { scheduleSaveState, loadState } from './js/services/storage-service';

// BOT
import { play } from 'botBruce';

const savedState = loadState();

const store = createStore(appReducers, savedState, applyMiddleware(thunkMiddleware));

if (!savedState) {
  store.dispatch(resetGame());
}

ReactDOM.render(
  <Provider store={store}>
    <GameContainer>
      <Game />
    </GameContainer>
  </Provider>,
  document.querySelector('#app-root')
);

const keypressHandler = getKeypressHandler(store.dispatch);
let isKeypressHandlerAttached = true;

document.addEventListener('keyup', keypressHandler);

store.subscribe(() => {
  const state = store.getState();

  scheduleSaveState(state);

  if (!state.board.notEnded) {
    document.removeEventListener('keyup', keypressHandler);
    isKeypressHandlerAttached = false;
  } else if (state.board.notEnded) {
    document.addEventListener('keyup', keypressHandler);
    isKeypressHandlerAttached = true;
  }
});

play(store);
