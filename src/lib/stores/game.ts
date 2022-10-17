import { get, derived } from "svelte/store";
import { _game } from "./_game";
import { buildBoard } from "./_buildBoard";
import { allowers } from "./allowers";

export const game = {
  subscribe: _game.subscribe,
  initialize: () => {
    _game.update((value) => {
      return {
        ...value,
        size: 10,
        mineCount: 25,
        board: buildBoard(10, 25),
      };
    });
  },
  increaseSize: () => {
    _game.update((value) => {
      const canIncrease = get(allowers).canIncreaseSize;
      if (!canIncrease) return value;

      const size = value.size + 1;
      const minMines = Math.floor((size * size) / 4);
      const mineCount = value.mineCount > minMines ? value.mineCount : minMines;
      return {
        ...value,
        size,
        mineCount,
        board: buildBoard(value.size + 1, value.mineCount),
      };
    });
  },
  decreaseSize: () => {
    _game.update((value) => {
      const getAllowers = get(allowers);
      const canDecrease = getAllowers.canDecreaseSize;
      if (!canDecrease) return value;
      const size = value.size - 1;

      const maxCount = Math.floor((size * size) / 2);
      const mineCount = value.mineCount > maxCount ? maxCount : value.mineCount;
      return {
        ...value,
        size,
        mineCount,
        board: buildBoard(value.size - 1, mineCount),
      };
    });
  },
  increaseMines: () => {
    _game.update((value) => {
      const canIncrease = get(allowers).canIncreaseMines;
      if (!canIncrease) return value;

      const mineCount = value.mineCount + 1;
      return {
        ...value,
        mineCount,
        board: buildBoard(value.size, mineCount),
      };
    });
  },
  decreaseMines: () => {
    _game.update((value) => {
      const canDecrease = get(allowers).canDecreaseMines;
      if (!canDecrease) return value;

      const mineCount = value.mineCount - 1;

      return {
        ...value,
        mineCount,
        board: buildBoard(value.size, mineCount),
      };
    });
  },
  handleClick: (row: number, col: number) => {
    if(!get(allowers).canPlay) return;
    _game.update((value) => {
      const square = value.board[row][col];

      if (square.covered) {
        square.covered = false;
      }

      return {
        ...value,
      };
    });
  },
};
