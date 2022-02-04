import { move } from "./move-service";

describe("move method", () => {
  test("moves tiles up simple case", () => {
    const tiles = [
      [0, 0, 0, 0],
      [0, 2, 0, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    const newBoard = move("UP", { tiles });

    expect(newBoard.tiles).toEqual([
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });

  test("moves tiles up adding numbers", () => {
    const tiles = [
      [0, 0, 0, 0],
      [2, 0, 0, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    const newBoard = move("UP", { tiles });

    expect(newBoard.tiles).toEqual([
      [4, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });

  test("moves tiles up adding twice", () => {
    const tiles = [
      [2, 0, 0, 0],
      [2, 0, 0, 0],
      [2, 0, 0, 0],
      [2, 0, 0, 0],
    ];

    const newBoard = move("UP", { tiles });

    expect(newBoard.tiles).toEqual([
      [4, 0, 0, 0],
      [4, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });

  test("moves tiles up adding twice when different numbers", () => {
    const tiles = [
      [4, 0, 0, 0],
      [4, 0, 0, 0],
      [2, 0, 0, 0],
      [2, 0, 0, 0],
    ];

    const newBoard = move("UP", { tiles });

    expect(newBoard.tiles).toEqual([
      [8, 0, 0, 0],
      [4, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    const tilesUpsideDown = [
      [2, 0, 0, 0],
      [2, 0, 0, 0],
      [4, 0, 0, 0],
      [4, 0, 0, 0],
    ];

    const newBoardUpsideDown = move("UP", { tiles: tilesUpsideDown });

    expect(newBoardUpsideDown.tiles).toEqual([
      [4, 0, 0, 0],
      [8, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });

  test("moves tiles up adding numbers once with full row", () => {
    const tiles = [
      [2, 0, 0, 0],
      [2, 0, 0, 0],
      [4, 0, 0, 0],
      [2, 0, 0, 0],
    ];

    const newBoard = move("UP", { tiles });

    expect(newBoard.tiles).toEqual([
      [4, 0, 0, 0],
      [4, 0, 0, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });

  test("sets notEnded flag to true when can move up", () => {
    const tiles = [
      [16, 2, 16, 2],
      [8, 4, 8, 4],
      [4, 8, 4, 8],
      [2, 16, 2, 8],
    ];

    const newBoard = move("UP", { tiles });

    expect(newBoard.notEnded).toBe(true);
  });

  test("sets notEnded flag to true when can move left", () => {
    const tiles = [
      [16, 2, 16, 2],
      [8, 4, 8, 4],
      [4, 8, 4, 8],
      [2, 16, 2, 2],
    ];

    const newBoard = move("UP", { tiles });

    expect(newBoard.notEnded).toBe(true);
  });

  test("sets notEnded flag to false", () => {
    const tiles = [
      [16, 2, 16, 2],
      [8, 4, 8, 4],
      [4, 8, 4, 8],
      [2, 16, 2, 16],
    ];

    const newBoard = move("UP", { tiles });

    expect(newBoard.notEnded).toBe(false);
  });
});
