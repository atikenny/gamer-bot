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
    const columns = rotateMatrix(board);

    columns.forEach(column => {
        let summedOnce = false;

        if (direction === 'DOWN') {
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

        if (direction === 'DOWN') {
            column.reverse();
        }
    });

    return rotateMatrix(columns);
};

export const moveUp = (board) => move('UP', board);

export const moveDown = (board) => move('DOWN', board);
