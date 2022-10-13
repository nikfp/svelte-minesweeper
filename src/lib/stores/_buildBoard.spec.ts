import { describe, it, expect } from 'vitest'
import { buildBoard } from './_buildBoard'

describe('Board Builder', () => {
  it('builds the right size board', () => {
    const board = buildBoard(5, 5);

    expect(board.length).eq(5);
    expect(board.every(el => el.length === 5)).true;
  })

  it('adds correct number of mines', () => {
    const size = 10;
    const count = 10;
    const board = buildBoard(size, count);

    const innerCount = board.reduce((prev, el) => {
      return prev + el.filter(inner => inner.mine).length
    }, 0)

    expect(innerCount).eq(10);
  })
})
