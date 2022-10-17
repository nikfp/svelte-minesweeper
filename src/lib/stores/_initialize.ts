import { buildBoard } from "./_buildBoard";
import type { IGame } from "./_game";
import { _game } from "./_game";

export default function () {
  _game.update((value) => {
    return {
      ...value,
      size: 10,
      mineCount: 25,
      board: buildBoard(10, 25),
    };
  });
}
