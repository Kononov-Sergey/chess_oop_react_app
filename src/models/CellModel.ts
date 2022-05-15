import { Board } from "./BoardModel";
import { Colors } from "./ColorsModel";
import { Figure } from "./figures/FigureModule";

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  avalilable: boolean;
  id: number;

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Colors,
    figure: Figure | null
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.avalilable = false;
    this.id = Math.random();
  }
}