import { move } from './move-service';

describe('move method', () => {
    test('moves tiles up', () => {
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
});
