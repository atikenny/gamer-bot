import { move } from './move-service';

describe('move method', () => {
    test('moves tiles up simple case', () => {
        const tiles = [
            [0, 0, 0, 0],
            [0, 2, 0, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0]
        ];

        const newBoard = move('UP', { tiles });

        expect(newBoard.tiles).toEqual([
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
    });

    test('moves tiles up adding numbers', () => {
        const tiles = [
            [0, 0, 0, 0],
            [2, 0, 0, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0]
        ];

        const newBoard = move('UP', { tiles });

        expect(newBoard.tiles).toEqual([
            [4, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
    });

    test('moves tiles up adding twice', () => {
        const tiles = [
            [2, 0, 0, 0],
            [2, 0, 0, 0],
            [2, 0, 0, 0],
            [2, 0, 0, 0]
        ];

        const newBoard = move('UP', { tiles });

        expect(newBoard.tiles).toEqual([
            [4, 0, 0, 0],
            [4, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
    });

    test('moves tiles up adding numbers once with full row', () => {
        const tiles = [
            [2, 0, 0, 0],
            [2, 0, 0, 0],
            [4, 0, 0, 0],
            [2, 0, 0, 0]
        ];

        const newBoard = move('UP', { tiles });

        expect(newBoard.tiles).toEqual([
            [4, 0, 0, 0],
            [4, 0, 0, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
    });
});
