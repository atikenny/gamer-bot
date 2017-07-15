const rotateMatrix = (matrix) => {
    return matrix.map((originalRow, index) => {
        let newRow = [];

        matrix.forEach((row) => {
            newRow.push(row[index]);
        });

        return newRow;
    });
};

export const move = (direction, board) => {
    let columns, newBoard;

    if (direction === 'UP' || direction === 'DOWN') {
        columns = rotateMatrix(board);
    } else {
        columns = board.slice();
    }

    columns.forEach(column => {
        let summedOnce = false;

        if (direction === 'DOWN' || direction === 'RIGHT') {
            column.reverse();
        }

        column.forEach((number, rowIndex) => {
            if (number !== 0) {
                while (--rowIndex >= 0) {
                    if (column[rowIndex] === 0) {
                        column[rowIndex] = number;
                        column[rowIndex + 1] = 0;
                    } else if (column[rowIndex] === number && !summedOnce) {
                        column[rowIndex] = 2 * number;
                        column[rowIndex + 1] = 0;

                        summedOnce = true;
                    } else {
                        break;
                    }
                }
            }
        });

        if (direction === 'DOWN' || direction === 'RIGHT') {
            column.reverse();
        }
    });

    if (direction === 'UP' || direction === 'DOWN') {
        newBoard = rotateMatrix(columns);
    } else {
        newBoard = columns.slice();
    }

    return newBoard;
};
