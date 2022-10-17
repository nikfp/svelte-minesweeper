import { _game } from "./_game";
import { buildBoard } from "./_buildBoard";
import _initialize from './_initialize';
import _increaseSize from './_increaseSize';
import _decreaseSize from './_decreaseSize';
import _increaseMines from './_increaseMines';
import _decreaseMines from './_decreaseMines';
import _handleClick from './_handleClick';

export const game = {
  subscribe: _game.subscribe,
  initialize: _initialize,
  increaseSize: _increaseSize,
  decreaseSize: _decreaseSize,
  increaseMines: _increaseMines,
  decreaseMines: _decreaseMines,
  handleClick: _handleClick,
  reset: () => {
    _game.update(value => {
      return {
        ...value, 
        board: buildBoard(value.size, value.mineCount)
      }
    })
  }
};
