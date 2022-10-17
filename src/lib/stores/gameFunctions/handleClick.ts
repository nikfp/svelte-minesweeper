import { get } from "svelte/store";
import { allowers } from "../allowers";
import { _game } from "../root/_game";

export default function (row: number, col: number) {
  if (!get(allowers).canPlay) return;

  _game.update((value) => {
    const square = value.board[row][col];

    if (square.covered) {
      square.covered = false;
    }

    return {
      ...value,
    };
  });
}
