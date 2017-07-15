export const moveUp = (board) => {
    const columns = board.map((row, rowIndex) => {
        return [
            board[0][rowIndex],
            board[1][rowIndex],
            board[2][rowIndex],
            board[3][rowIndex]
        ];
    });

    columns.forEach(column => {
        column.forEach((number, rowIndex) => {
            if (number !== 0) {
                while (--rowIndex >= 0) {
                    if (column[rowIndex] === 0) {
                        column[rowIndex] = number;
                        column[rowIndex + 1] = 0;
                    } else if (column[rowIndex] === number) {
                        column[rowIndex] = 2 * number;
                        column[rowIndex + 1] = 0;
                    }
                }
            }
        });
    });

    return columns.map((column, columnIndex) => {
        return [
            columns[0][columnIndex],
            columns[1][columnIndex],
            columns[2][columnIndex],
            columns[3][columnIndex]
        ];
    });
};
