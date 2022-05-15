import { CellClass } from "../CellModel";
import { Colors } from "../ColorsModel";
import { Figure, FigureNames } from "./FigureModule";

import blackBishopLogo from "../../assets/black-bishop.png";
import whiteBishopLogo from "../../assets/white-bishop.png";

export class Bishop extends Figure {
  constructor(cell: CellClass, color: Colors) {
    super(cell, color);
    this.logo = this.color === Colors.BLACK ? blackBishopLogo : whiteBishopLogo;
    this.name = FigureNames.BISHOP;
  }
}
