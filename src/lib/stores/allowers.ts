import { derived } from "svelte/store";
import { _game } from "./root/_game";

export const allowers = derived(_game, ($_game) => {
  let size = $_game.size;
  let count = $_game.mineCount;
  return {
    canIncreaseSize: $_game.size < 15,
    canDecreaseSize: $_game.size > 5,
    canIncreaseMines: count < (size * size / 2),
    canDecreaseMines: count > ((size * size) / 4), 
    canPlay: !$_game.board.flat().some(el => el.covered === false && el.mine)
  };
});
