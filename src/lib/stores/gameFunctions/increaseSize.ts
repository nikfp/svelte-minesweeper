import { get } from "svelte/store";
import { allowers } from "../allowers";
import { _game } from "../root/_game";
import buildBoard from "./buildBoard";

export default function () {
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
}
