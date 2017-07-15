import React                    from 'react';
import ReactDOM                 from 'react-dom';
import { Provider }             from 'react-redux';
import { createStore }          from 'redux';

import './styles/main';

import appReducers              from './js/reducers';

import GameContainer            from './js/components/game-container';
import Game                     from './js/components/game';
import { getKeypressHandler }   from './js/services/board-service';

let store = createStore(appReducers);

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
