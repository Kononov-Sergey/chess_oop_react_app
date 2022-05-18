import { CellClass } from "../CellModel";
import { Colors } from "../ColorsModel";
import { Figure, FigureNames } from "./FigureModel";

import blackKingLogo from "../../assets/black-king.png";
import whiteKingLogo from "../../assets/white-king.png";

export class King extends Figure {
  constructor(cell: CellClass, color: Colors) {
    super(cell, color);
    this.logo = this.color === Colors.BLACK ? blackKingLogo : whiteKingLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: CellClass): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    const diffX = Math.abs(target.x - this.cell.x);
    const diffY = Math.abs(target.y - this.cell.y);

    return diffX <= 1 && diffY <= 1;
  }
}
