import { Colors } from "../ColorsModel";
import { CellClass } from "../CellModel";

export enum FigureNames {
  FIGURE = "фигура",
  BISHOP = "слон",
  KING = "король",
  KNIGHT = "конь",
  PAWN = "пешка",
  QUEEN = "ферзь",
  ROOK = "ладья",
}

export class Figure {
  color: Colors;
  logo: string | null;
  cell: CellClass;
  name: FigureNames;
  readonly id: number;

  constructor(cell: CellClass, color: Colors) {
    this.cell = cell;
    this.color = color;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: CellClass): boolean {
    if (target.figure?.color === this.cell.figure?.color) {
      return false;
    }
    if (target.figure?.name === FigureNames.KING) {
      return false;
    }
    return true;
  }
  moveFigure(target: CellClass) {
    this.cell = target;
  }
}
