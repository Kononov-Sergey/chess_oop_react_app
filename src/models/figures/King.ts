import { CellClass } from "../CellModel";
import { Colors } from "../ColorsModel";
import { Figure, FigureNames } from "./FigureModule";

import blackKingLogo from "../../assets/black-king.png";
import whiteKingLogo from "../../assets/white-king.png";

export class King extends Figure {
  constructor(cell: CellClass, color: Colors) {
    super(cell, color);
    this.logo = this.color === Colors.BLACK ? blackKingLogo : whiteKingLogo;
    this.name = FigureNames.KING;
  }
}
