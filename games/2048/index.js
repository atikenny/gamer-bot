import React            from 'react';
import ReactDOM         from 'react-dom';
import { Provider }     from 'react-redux';
import { createStore }  from 'redux';

import './styles/main';

import appReducers      from './js/reducers'

import GameContainer    from 'game2048/js/components/game-container';
import Game             from 'game2048/js/components/game';

let store = createStore(appReducers);

ReactDOM.render(
    <Provider store={store}>
        <GameContainer>
            <Game />
        </GameContainer>
    </Provider>,
    document.querySelector('#app-root')
);
