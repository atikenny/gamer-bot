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
document.addEventListener('keyup', keypressHandler);
