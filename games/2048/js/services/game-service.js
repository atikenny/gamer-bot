const getRandomPercent = () => Math.floor(Math.random() * 100);

export const getRandomNumber = () => {
  const randomPercent = getRandomPercent();

  if (randomPercent <= 85) {
    return 2;
  }

  return 4;
};

const getEmptyBoardIndexes = (board) =>
  board.reduce((emptyBoardIndexes, boardRow, rowIndex) => {
    const cellOffset = rowIndex * 4;
    const emptyCellIndexes = [];

    boardRow.forEach((cell, index) => {
      if (cell === 0) {
        emptyCellIndexes.push(cellOffset + index);
      }
    });

    return emptyBoardIndexes.concat(emptyCellIndexes);
  }, []);

export const getRandomEmptyCell = (board) => {
  const emptyBoardIndexes = getEmptyBoardIndexes(board);
  const randomIndex = Math.floor(Math.random() * emptyBoardIndexes.length);
  const randomEmptyCellIndex = emptyBoardIndexes[randomIndex];
  const randomRow = Math.floor(randomEmptyCellIndex / 4);
  const randomColumn = randomEmptyCellIndex % 4;

  return {
    row: randomRow,
    column: randomColumn
  };
};
