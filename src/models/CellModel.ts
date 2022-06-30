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

  public withoutAFigure(): boolean {
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
    if (this.y !== target.y) {
      return false;
    }
    const [minX, maxX] = [
      Math.min(this.x, target.x),
      Math.max(this.x, target.x),
    ];

    for (let x = minX + 1; x < maxX; x++) {
      if (!this.board.getCell(x, this.y).withoutAFigure()) {
        return false;
      }
    }
    return true;
  }
  public isEmptyDiagonal(target: CellClass): boolean {
    const diffX = Math.abs(target.x - this.x);
    const diffY = Math.abs(target.y - this.y);
    if (diffX !== diffY) {
      return false;
    }

    const [directionX, directionY] = [
      target.x < this.x ? -1 : 1,
      target.y < this.y ? -1 : 1,
    ];

    for (let i = 1; i < diffY; i++) {
      if (
        !this.board
          .getCell(this.x + directionX * i, this.y + directionY * i)
          .withoutAFigure()
      ) {
        return false;
      }
    }

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
