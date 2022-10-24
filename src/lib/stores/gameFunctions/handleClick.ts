import { get } from "svelte/store";
import { allowers } from "../allowers";
import { _game, type ISquare } from "../root/_game";
import { getAdjacentLocations } from "./utilities";

export default function (row: number, col: number) {
  if (!get(allowers).canPlay) return;

  _game.update((value) => {
    const square = value.board[row][col];
    square.covered = false;

    // Handle square as mine
    if (square.mine) {
      value.board.forEach((row) => {
        row.forEach((cell) => {
          if (cell.mine) cell.covered = false;
        });
      });

      return {
        ...value,
      };
    }

    // Handle square as adjacent to mine
    if (square.adjacentMines > 0) {
      return {
        ...value
      }
    }

    // Handle square without adjacent mines
    //
    // Start by creating a set of squares
    // This insures square is only entered once
    const toEvaluate = new Set<ISquare>();

    // get adjacent squares to current square and add to set
    getAdjacentLocations(square.row, square.col, value.size).forEach(el => {
      const [row, col] = el;
      toEvaluate.add(value.board[row][col]);
    })

    // iterate through set and evaluate squares
    for (const s of toEvaluate) {
      // first, uncover square.
      // If it's adjacent to a zero square, it can't be a mine
      s.covered = false;

      // if current square being evaluated has zero mines adjacent, 
      // get adjacent squared and add to iteration set
      // The set iterator will continue over the new entries after insertion
      if(s.adjacentMines === 0) {
        getAdjacentLocations(s.row, s.col, value.size).forEach(el => {
          const [row, col] = el;
          toEvaluate.add(value.board[row][col])
        })
      }
    }

    return {
      ...value
    }
  });
}
