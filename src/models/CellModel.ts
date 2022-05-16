import { BoardClass } from "./BoardModel";
import { Colors } from "./ColorsModel";
import { Figure } from "./figures/FigureModule";

export class CellClass {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: BoardClass;
  avalilable: boolean;
  id: number;

  constructor(
    board: BoardClass,
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

  public moveFigure(target: CellClass) {
    if (this.figure && this.figure.canMove(target)) {
      this.figure.moveFigure(target);
      target.figure = this.figure;
      this.figure = null;
    }
  }
}
