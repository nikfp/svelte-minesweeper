
import { writable } from "svelte/store";

export interface ISquare {
  covered: boolean;
  row: number;
  col: number;
  mine: boolean;
}

export type IBoard = ISquare[][];

export interface IGame {
  board: IBoard;
  mineCount: number;
  size: number;
}

export const _game = writable<IGame>({
  size: 0,
  mineCount: 0,
  board: [],
});
