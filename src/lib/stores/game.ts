import { writable, get, derived } from "svelte/store";

export interface ISquare {
  covered: boolean;
  row: number;
  col: number;
  mine: boolean;
}

interface IGame {
  board: ISquare[][];
  mineCount: number;
  size: number;
}

const _game = writable<IGame>({
  size: 0,
  mineCount: 0,
  board: [],
});

function buildBoard(size: number, mineCount: number) {
  const squareCount = size * size;
  const random = Array(squareCount).fill(false);
  let placed = 0;

  while (placed <= mineCount) {
    const location = Math.floor(Math.random() * squareCount);

    if (random[location] === true) {
      continue;
    }
    random[location] = true;
    placed++;
  }

  const squares: ISquare[] = random.map((el) => {
    return {
      mine: el,
      row: 0,
      col: 0,
      covered: true,
    };
  });

  const board: ISquare[][] = [];

  while (squares.length > 0) {
    const row = squares.splice(0, mineCount);
    board.push(row);
  }

  return board;
}

export const allowers = derived(_game, ($_game) => {
  return {
    canIncreaseSize: $_game.size < 15,
    canDecreaseSize: $_game.size > 5,
  };
});

export const game = {
  subscribe: _game.subscribe,
  set: _game.set,
  update: _game.update,
  initialize: () => {
    _game.update((value) => {
      return {
        ...value,
        size: 10,
        mineCount: 10,
        board: buildBoard(10, 10),
      };
    });
  },
  increaseSize: () => {
    _game.update((value) => {
      const getAllowers = get(allowers);
      const canIncrease = getAllowers.canIncreaseSize;
      if (!canIncrease) return value;

      return {
        ...value,
        size: value.size + 1,
        board: buildBoard(value.size + 1, value.mineCount),
      };
    });
  },
  decreaseSize: () => {
    _game.update((value) => {
      const getAllowers = get(allowers);
      const canDecrease = getAllowers.canDecreaseSize;
      if (!canDecrease) return value;

      const maxCount = Math.floor((value.size * value.size) / 2);
      const mineCount = value.mineCount > maxCount ? maxCount : value.mineCount;
      return {
        ...value,
        size: value.size - 1,
        mineCount,
        board: buildBoard(value.size - 1, mineCount),
      };
    });
  },
};
