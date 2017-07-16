const DIRECTIONS = {
    UP: 'UP',
    RIGHT: 'RIGHT',
    DOWN: 'DOWN',
    LEFT: 'LEFT'
};

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

const countItemOccurances = (needle, haystack) => {
    return haystack.reduce((occurances, item) => {
        return occurances += item === needle ? 1 : 0;
    }, 0);
};

const checkHasTwoPairOfNumbers = (numbers, distinctNumbers) => {
    const occurances = distinctNumbers.map(distinctNumber => countItemOccurances(distinctNumber, numbers));
    const distinctOccurances = getDistinctNumbers(occurances);

    return distinctOccurances.length === 1;
};

const checkCanAddTwice = (numbers) => {
    const distinctNumbers = getDistinctNumbers(numbers);
    const hasOnlyOneDistinctNumber = distinctNumbers.length === 1;
    const hasTwoPairOfNumbers = checkHasTwoPairOfNumbers(numbers, distinctNumbers);

    return hasOnlyOneDistinctNumber || hasTwoPairOfNumbers;
};

const hasNoZeros = (tiles) => {
    return !tiles.some(row => row.some(number => number === 0));
};

const couldMoveOtherDirection = (board, directionAlreadyTried) => {
    return Object.keys(DIRECTIONS).some(directionKey => {
        const direction = DIRECTIONS[directionKey];
        let canMove = false;

        if (direction !== directionAlreadyTried) {
            const { couldMove } = move(direction, { tiles: board.tiles.slice() }, true);

            canMove = couldMove;
        }

        return canMove;
    });
};

export const move = (direction, board, simulate) => {
    let columns, newTiles, couldMove = false, summed = 0;

    if (direction === DIRECTIONS.UP || direction === DIRECTIONS.DOWN) {
        columns = rotateMatrix(board.tiles);
    } else {
        columns = board.tiles.slice();
    }

    columns.forEach(column => {
        let summedOnce = false;
        let alreadySummedIndexes = [];
        const distinctNumbers = getDistinctNumbers(column);
        const canAddTwice = checkCanAddTwice(column);

        if (direction === DIRECTIONS.DOWN || direction === DIRECTIONS.RIGHT) {
            column.reverse();
        }

        column.forEach((number, rowIndex) => {
            if (number !== 0) {
                while (--rowIndex >= 0) {
                    const isAlreadySummedIndex = alreadySummedIndexes.indexOf(rowIndex) !== -1;

                    if (column[rowIndex] === 0) {
                        column[rowIndex] = number;
                        column[rowIndex + 1] = 0;

                        couldMove = true;
                    } else if (!isAlreadySummedIndex && (column[rowIndex] === number) && (!summedOnce || canAddTwice)) {
                        column[rowIndex] = 2 * number;
                        column[rowIndex + 1] = 0;

                        summedOnce = true;
                        summed += 2 * number;
                        couldMove = true;
                        alreadySummedIndexes.push(rowIndex);
                    } else {
                        break;
                    }
                }
            }
        });

        if (direction === DIRECTIONS.DOWN || direction === DIRECTIONS.RIGHT) {
            column.reverse();
        }
    });

    if (direction === DIRECTIONS.UP || direction === DIRECTIONS.DOWN) {
        newTiles = rotateMatrix(columns);
    } else {
        newTiles = columns.slice();
    }

    return {
        couldMove,
        summed,
        notEnded: couldMove || (!simulate && couldMoveOtherDirection(board, direction)),
        tiles: newTiles
    };
};
