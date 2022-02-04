const DIRECTIONS = {
  UP: 'UP',
  RIGHT: 'RIGHT',
  DOWN: 'DOWN',
  LEFT: 'LEFT'
};

const rotateMatrix = (matrix) =>
  matrix.map((originalRow, index) => {
    const newRow = [];

    matrix.forEach((row) => {
      newRow.push(row[index]);
    });

    return newRow;
  });

const getDistinctNumbers = (numbers) =>
  numbers.reduce((distinctNumbers, number) => {
    if (distinctNumbers.indexOf(number) === -1) {
      distinctNumbers.push(number);
    }

    return distinctNumbers;
  }, []);

const countItemOccurrences = (needle, haystack) =>
  haystack.reduce((occurrences, item) => (occurrences += item === needle ? 1 : 0), 0); // eslint-disable-line no-param-reassign

const checkHasTwoPairOfNumbers = (numbers, distinctNumbers) => {
  const occurrences = distinctNumbers.map((distinctNumber) => countItemOccurrences(distinctNumber, numbers));
  const distinctOccurrences = getDistinctNumbers(occurrences);

  return distinctOccurrences.length === 1;
};

const checkCanAddTwice = (numbers) => {
  const distinctNumbers = getDistinctNumbers(numbers);
  const hasOnlyOneDistinctNumber = distinctNumbers.length === 1;
  const hasTwoPairOfNumbers = checkHasTwoPairOfNumbers(numbers, distinctNumbers);

  return hasOnlyOneDistinctNumber || hasTwoPairOfNumbers;
};

const couldMoveOtherDirection = (board, directionAlreadyTried) =>
  Object.keys(DIRECTIONS).some((directionKey) => {
    const direction = DIRECTIONS[directionKey];
    let canMove = false;

    if (direction !== directionAlreadyTried) {
      const { couldMove } = move(direction, { tiles: board.tiles.slice() }, true); // eslint-disable-line

      canMove = couldMove;
    }

    return canMove;
  });

const move = (direction, board, simulate) => {
  let columns,
    newTiles,
    couldMove = false,
    summed = 0;

  if (direction === DIRECTIONS.UP || direction === DIRECTIONS.DOWN) {
    columns = rotateMatrix(board.tiles);
  } else {
    columns = board.tiles.slice();
  }

  columns.forEach((column) => {
    let summedOnce = false;
    const alreadySummedIndexes = [];
    const canAddTwice = checkCanAddTwice(column);

    if (direction === DIRECTIONS.DOWN || direction === DIRECTIONS.RIGHT) {
      column.reverse();
    }

    column.forEach((number, rowIndex) => {
      if (number !== 0) {
        // eslint-disable-next-line no-param-reassign
        while (--rowIndex >= 0) {
          const isAlreadySummedIndex = alreadySummedIndexes.indexOf(rowIndex) !== -1;

          if (column[rowIndex] === 0) {
            column[rowIndex] = number;
            column[rowIndex + 1] = 0;

            couldMove = true;
          } else if (!isAlreadySummedIndex && column[rowIndex] === number && (!summedOnce || canAddTwice)) {
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

export { move };
