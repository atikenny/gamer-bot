import React        from 'react';
import { connect }  from 'react-redux';

import 'games/2048/styles/components/board';

import Row          from './row';
import Column       from './column';
import Tiles        from './tiles';

const Board = ({ notEnded }) => (
    <div id="board-container" className={notEnded ? '' : 'ended'}>
        <div className="board">
            <Tiles />
            <Row>
                <Column />
                <Column />
                <Column />
                <Column />
            </Row>
            <Row>
                <Column />
                <Column />
                <Column />
                <Column />
            </Row>
            <Row>
                <Column />
                <Column />
                <Column />
                <Column />
            </Row>
            <Row>
                <Column />
                <Column />
                <Column />
                <Column />
            </Row>
        </div>
    </div>
);

const mapState = ({ board }) => {
    return {
        notEnded: board.notEnded
    };
};

export default connect(mapState)(Board);
