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

export const move = (direction, board) => {
    let columns, newTiles, couldMove = false, summed = 0;

    if (direction === 'UP' || direction === 'DOWN') {
        columns = rotateMatrix(board.tiles);
    } else {
        columns = board.tiles.slice();
    }

    columns.forEach(column => {
        let summedOnce = false;
        let alreadySummedIndexes = [];
        const distinctNumbers = getDistinctNumbers(column);
        const canAddTwice = checkCanAddTwice(column);

        if (direction === 'DOWN' || direction === 'RIGHT') {
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
