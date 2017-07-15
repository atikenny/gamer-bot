import React from 'react';
import { connect } from 'react-redux';

import 'game2048/styles/components/tiles';

const Tiles = ({ board }) => (
    <div id="tiles">
        {board.map((row, rowIndex) => (
            row.map((number, columnIndex) => {
                const rowNumber = rowIndex + 1;
                const columnNumber = columnIndex + 1;

                if (number) {
                    return (
                        <span className={`tile tile-${number} row-${rowNumber} column-${columnNumber}`}>
                            {number}
                        </span>
                    );
                } else {
                    return null;
                }
            })
        ))}
    </div>
);

const mapState = ({ board }) => {
    return {
        board
    };
};

export default connect(mapState)(Tiles);
