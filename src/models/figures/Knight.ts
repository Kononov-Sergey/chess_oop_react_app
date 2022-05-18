import { CellClass } from "../CellModel";
import { Colors } from "../ColorsModel";
import { Figure, FigureNames } from "./FigureModel";

import blackKnightLogo from "../../assets/black-knight.png";
import whiteKnightLogo from "../../assets/white-knight.png";

export class Knight extends Figure {
  constructor(cell: CellClass, color: Colors) {
    super(cell, color);
    this.logo = this.color === Colors.BLACK ? blackKnightLogo : whiteKnightLogo;
    this.name = FigureNames.KNIGHT;
  }

  canMove(target: CellClass): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    const diffX = Math.abs(target.x - this.cell.x);
    const diffY = Math.abs(target.y - this.cell.y);

    return (diffX === 1 && diffY === 2) || (diffX === 2 && diffY === 1);
  }
}
