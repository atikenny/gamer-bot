import React            from 'react';
import { connect }      from 'react-redux';

import 'game2048/styles/components/restart';

import { startGame }    from '../actions/board';

const Restart = ({ startGame }) => (
    <button className="button restart-button" onClick={startGame}>
        restart
    </button>
);

const mapDispatch = (dispatch) => {
    return {
        startGame: () => {
            dispatch(startGame());
        }
    };
};

export default connect(null, mapDispatch)(Restart);
