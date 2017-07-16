const rotateMatrix = (matrix) => {
    return matrix.map((originalRow, index) => {
        let newRow = [];

        matrix.forEach((row) => {
            newRow.push(row[index]);
        });

        return newRow;
    });
};

const getDistinctNumbers = (numbers) => {
    return numbers.reduce((distinctNumbers, number) => {
        if (distinctNumbers.indexOf(number) === -1) {
            distinctNumbers.push(number);
        }

        return distinctNumbers;
    }, []);
};

export const move = (direction, board) => {
    let columns, newTiles, couldMove = false, summed = 0;

    if (direction === 'UP' || direction === 'DOWN') {
        columns = rotateMatrix(board.tiles);
    } else {
        columns = board.tiles.slice();
    }

    columns.forEach(column => {
        let summedOnce = false;
        const distinctNumbers = getDistinctNumbers(column);
        const canAddTwice = distinctNumbers.length === 1;

        if (direction === 'DOWN' || direction === 'RIGHT') {
            column.reverse();
        }

        column.forEach((number, rowIndex) => {
            if (number !== 0) {
                while (--rowIndex >= 0) {
                    if (column[rowIndex] === 0) {
                        column[rowIndex] = number;
                        column[rowIndex + 1] = 0;

                        couldMove = true;
                    } else if (column[rowIndex] === number && (!summedOnce || canAddTwice)) {
                        column[rowIndex] = 2 * number;
                        column[rowIndex + 1] = 0;

                        summedOnce = true;
                        summed += 2 * number;
                        couldMove = true;
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
        newTiles = rotateMatrix(columns);
    } else {
        newTiles = columns.slice();
    }

    return {
        couldMove,
        summed,
        tiles: newTiles
    };
};
