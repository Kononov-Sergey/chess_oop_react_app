import { createFalse } from "typescript";
import { BoardClass } from "./BoardModel";
import { Colors } from "./ColorsModel";
import { Figure } from "./figures/FigureModel";

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

  private withoutAFigure(): boolean {
    return this.figure === null;
  }

  public isEmptyVertical(target: CellClass): boolean {
    if (this.x !== target.x) {
      return false;
    }
    const [minY, maxY] = [
      Math.min(this.y, target.y),
      Math.max(this.y, target.y),
    ];

    for (let y = minY + 1; y < maxY; y++) {
      if (!this.board.getCell(this.x, y).withoutAFigure()) {
        return false;
      }
    }
    return true;
  }

  public isEmptyHorizontal(target: CellClass): boolean {
    return true;
  }
  public isEmptyDiagonal(target: CellClass): boolean {
    return true;
  }

  public moveFigure(target: CellClass) {
    if (this.figure && this.figure.canMove(target)) {
      this.figure.moveFigure(target);
      target.figure = this.figure;
      this.figure = null;
    }
  }
}
