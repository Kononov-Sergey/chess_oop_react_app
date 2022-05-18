import { CellClass } from "../CellModel";
import { Colors } from "../ColorsModel";
import { Figure, FigureNames } from "./FigureModel";

import blackRookLogo from "../../assets/black-rook.png";
import whiteRookLogo from "../../assets/white-rook.png";

export class Rook extends Figure {
  constructor(cell: CellClass, color: Colors) {
    super(cell, color);
    this.logo = this.color === Colors.BLACK ? blackRookLogo : whiteRookLogo;
    this.name = FigureNames.ROOK;
  }
  canMove(target: CellClass): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (
      !this.cell.isEmptyHorizontal(target) &&
      !this.cell.isEmptyVertical(target)
    ) {
      return false;
    }
    return true;
  }
}
