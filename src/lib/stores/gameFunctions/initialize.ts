import { _game } from "../root/_game";
import buildBoard from "./buildBoard";

export default function () {
  _game.update((value) => {
    return {
      ...value,
      size: 10,
      mineCount: 20,
      board: buildBoard(10, 20),
    };
  });
}
