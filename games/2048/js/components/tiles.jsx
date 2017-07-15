import React        from 'react';
import { connect }  from 'react-redux';

import 'game2048/styles/components/tiles';

const Tiles = ({ tiles }) => (
    <div id="tiles">
        {tiles.map((row, rowIndex) => (
            row.map((number, columnIndex) => {
                const rowNumber = rowIndex + 1;
                const columnNumber = columnIndex + 1;
                let tileClassName = `tile row-${rowNumber} column-${columnNumber}`;

                if (number > 2048) {
                    tileClassName += ' tile-super';
                } else {
                    tileClassName += ` tile-${number}`;
                }

                if (number) {
                    return (
                        <span className={tileClassName}>
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
        tiles: board.tiles
    };
};

export default connect(mapState)(Tiles);
