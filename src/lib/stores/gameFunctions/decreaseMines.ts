import { get } from "svelte/store";
import { allowers } from "../allowers";
import { _game } from "../root/_game";
import buildBoard from "./buildBoard";

export default function () {
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
}
