import { get } from "svelte/store";
import { allowers } from "./allowers";
import { buildBoard } from "./_buildBoard";
import { _game } from "./_game";

export default function () {
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
}
