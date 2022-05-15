import { CellClass } from "../CellModel";
import { Colors } from "../ColorsModel";
import { Figure, FigureNames } from "./FigureModule";

import blackQueenLogo from "../../assets/black-queen.png";
import whiteQueenLogo from "../../assets/white-queen.png";

export class Queen extends Figure {
  constructor(cell: CellClass, color: Colors) {
    super(cell, color);
    this.logo = this.color === Colors.BLACK ? blackQueenLogo : whiteQueenLogo;
    this.name = FigureNames.QUEEN;
  }
}
