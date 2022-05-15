import { CellClass } from "../CellModel";
import { Colors } from "../ColorsModel";
import { Figure, FigureNames } from "./FigureModule";

import blackKnightLogo from "../../assets/black-knight.png";
import whiteKnightLogo from "../../assets/white-king.png";

export class Knight extends Figure {
  constructor(cell: CellClass, color: Colors) {
    super(cell, color);
    this.logo = this.color === Colors.BLACK ? blackKnightLogo : whiteKnightLogo;
    this.name = FigureNames.KNIGHT;
  }
}
