import React                    from 'react';
import ReactDOM                 from 'react-dom';
import { Provider }             from 'react-redux';
import {
    createStore,
    applyMiddleware
} from 'redux';
import thunkMiddleware          from 'redux-thunk';

import './styles/main';

import appReducers              from './js/reducers';

import GameContainer            from './js/components/game-container';
import Game                     from './js/components/game';
import { getKeypressHandler }   from './js/services/board-service';
import { startGame }            from './js/actions/board';

let store = createStore(
    appReducers,
    applyMiddleware(thunkMiddleware)
);

store.dispatch(startGame());

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
    const { board } = store.getState();

    if (!board.notEnded) {
        document.removeEventListener('keyup', keypressHandler);
        isKeypressHandlerAttached = false;
    } else if (board.notEnded) {
        document.addEventListener('keyup', keypressHandler);
        isKeypressHandlerAttached = true;
    }
});

