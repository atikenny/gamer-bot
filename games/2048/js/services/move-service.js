const rotateMatrix = (matrix) => {
    return matrix.map((originalRow, index) => {
        let newRow = [];

        matrix.forEach((row) => {
            newRow.push(row[index]);
        });

        return newRow;
    });
};

const array = [
    [2, 0, 0, 0],
    [0, 0, 0, 0],
    [2, 0, 0, 0],
    [4, 0, 0, 0]
];

const columns = [
    [2, 0, 2, 4]
];

export const moveUp = (board) => {
    const columns = rotateMatrix(board);

    columns.forEach(column => {
        let summedOnce = false;

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
    });

    return rotateMatrix(columns);
};

export const moveDown = (board) => {
    const columns = rotateMatrix(board);

    columns.forEach(column => {
        let summedOnce = false;

        column.reverse().forEach((number, rowIndex) => {
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

        column.reverse();
    });

    return rotateMatrix(columns);
};
