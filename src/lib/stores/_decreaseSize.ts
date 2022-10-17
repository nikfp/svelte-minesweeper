import { get } from "svelte/store";
import { allowers } from "./allowers";
import { buildBoard } from "./_buildBoard";
import { _game } from "./_game";

export default function () {
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
}
