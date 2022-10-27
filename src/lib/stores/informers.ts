import { derived } from "svelte/store";
import { _game } from "./root/_game";

type GameState = "won" | "lost" | "playing";

export const informers = derived(_game, ($_game) => {
  let board = $_game.board.flat();
  let size = $_game.size * $_game.size;
  let count = $_game.mineCount;

  let gameWon = board.filter((el) => el.covered).length === $_game.mineCount;
  let gameLost = board.filter((el) => !el.covered).some((el) => el.mine);
  let gameState: GameState = gameWon ? "won" : gameLost ? "lost" : "playing";
  let uncleared = size - count - board.filter(el => !el.covered).length; 

  return {
    flagCount: board.filter((el) => el.flag === true).length,
    gameState,
    uncleared
  };
});
