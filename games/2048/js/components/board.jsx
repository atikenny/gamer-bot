import React from 'react';

import 'game2048/styles/components/board';

import Row from './row';
import Column from './column';

const Board = () => (
    <div id="board">
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
);

export default Board;
