import buildBoard from "./gameFunctions/buildBoard";
import decreaseMines from "./gameFunctions/decreaseMines";
import decreaseSize from "./gameFunctions/decreaseSize";
import handleClick from "./gameFunctions/handleClick";
import increaseMines from "./gameFunctions/increaseMines";
import increaseSize from "./gameFunctions/increaseSize";
import initialize from "./gameFunctions/initialize";
import { _game } from "./root/_game";

export const game = {
  subscribe: _game.subscribe,
  initialize: initialize,
  increaseSize: increaseSize,
  decreaseSize: decreaseSize,
  increaseMines: increaseMines,
  decreaseMines: decreaseMines,
  handleClick: handleClick,
  reset: () => {
    _game.update(value => {
      return {
        ...value, 
        board: buildBoard(value.size, value.mineCount)
      }
    })
  }
};
