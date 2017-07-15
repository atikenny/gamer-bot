const getRandomDigit = () => Math.floor(Math.random() * 10);

export const getRandomNumber = () => {
    const randomDigit = getRandomDigit();

    if (randomDigit >= 7) {
        return 2;
    } else {
        return 4;
    }
};

const getEmptyBoardIndexes = (board) => {
    return board.reduce((emptyBoardIndexes, boardRow, rowIndex) => {
        const cellOffset = rowIndex * 4;
        const emptyCellIndexes = [];

        boardRow.forEach((cell, index) => {
            if (cell === 0) {
                emptyCellIndexes.push(cellOffset + index);
            }
        });

        return emptyBoardIndexes.concat(emptyCellIndexes);
    }, []);
};

export const getRandomEmptyCell = (board) => {
    const emptyBoardIndexes = getEmptyBoardIndexes(board);
    const randomIndex = Math.floor(Math.random() * emptyBoardIndexes.length);
    const randomEmptyCellIndex = emptyBoardIndexes[randomIndex];
    const randomRow = Math.floor(randomEmptyCellIndex / 4);
    const randomColumn = randomEmptyCellIndex % 4;

    return {
        row: randomRow, column: randomColumn
    };
};
