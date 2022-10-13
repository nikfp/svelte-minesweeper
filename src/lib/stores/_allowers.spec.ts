import { describe, it, expect } from 'vitest';
import { get } from 'svelte/store'
import { allowers } from './allowers'
import { buildBoard } from './_buildBoard';
import { _game } from './_game';

function setBoard(size, mineCount) {
  _game.update(value => {
    return {
      ...value,
      size,
      mineCount,
      board: buildBoard(size, mineCount)
    }
  })
}

describe('Allowers', () => {
  it('cannot increase board size past 15', () => {
    setBoard(15, 15);
    const allowed = get(allowers);

    expect(allowed.canIncreaseSize).false;
  });

  it('board can be increase at size 14', () => {
    setBoard(14, 14)

    const allowed = get(allowers);

    expect(allowed.canIncreaseSize).true;
  })

  it('board cannot decrease below 5', () => {
    setBoard(5, 5)

    const allowed = get(allowers);

    expect(allowed.canDecreaseSize).false;
  })

  it('board can decrease at 6', () => {
    setBoard(6, 6);

    const allowed = get(allowers);

    expect(allowed.canDecreaseSize).true;
  })

  it('mine count cannot increase past half the squares on the board', () => {
    setBoard(10, 50);

    const allowed = get(allowers);

    expect(allowed.canIncreaseMines).false;

  })

  it('mine count can be increased when less than half of squares are mines', () => {
    setBoard(10, 49)

    const allowed = get(allowers);

    expect(allowed.canIncreaseMines).true;
  })

  it('mine count cannot decrease below 25 percent of squares', () => {
    setBoard(100, 25);

    const allowed = get(allowers);

    expect(allowed.canDecreaseMines).false;
  })

  it('mine count can decrease to 25 percent of squares', () => {
    setBoard(10, 26);

    const allowed = get(allowers);

    expect(allowed.canDecreaseMines).true;
  })
})
