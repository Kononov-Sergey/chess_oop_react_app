import { Colors } from "../ColorsModel";
import { CellClass } from "../CellModel";
import logo from "../../assets/black-bishop.png";
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
  logo: HTMLImageElement | null;
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

  canMove(target: CellClass) {
    return true;
  }

  moveFigure(target: CellClass) {}
}
