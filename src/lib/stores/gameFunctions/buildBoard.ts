import type { IBoard, ISquare } from "../root/_game";

export default function buildBoard(size: number, mineCount: number): IBoard {
  const squareCount = size * size;
  const random = Array(squareCount).fill(false);
  let placed = 0;

  while (placed < mineCount) {
    const location = Math.floor(Math.random() * squareCount);

    if (random[location] === true) {
      continue;
    }
    random[location] = true;
    placed++;
  }

  const squares: ISquare[] = random.map((el) => {
    return {
      mine: el,
      row: 0,
      col: 0,
      covered: true,
    };
  });

  const board: ISquare[][] = [];

  while (squares.length > 0) {
    const row = squares.splice(0, size);
    board.push(row);
  }

  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      col.row = rowIndex;
      col.col = colIndex;
    })
  })

  return board;
}
