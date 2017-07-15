import React from 'react';

import 'game2048/styles/components/board';

import Row from './row';
import Column from './column';
import Tiles from './tiles';

const Board = () => (
    <div id="board-container">
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

export default Board;
