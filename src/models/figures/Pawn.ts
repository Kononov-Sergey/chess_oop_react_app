import { CellClass } from "../CellModel";
import { Colors } from "../ColorsModel";
import { Figure, FigureNames } from "./FigureModule";

import blackPawnLogo from "../../assets/black-pawn.png";
import whitePawnLogo from "../../assets/white-pawn.png";

export class Pawn extends Figure {
  constructor(cell: CellClass, color: Colors) {
    super(cell, color);
    this.logo = this.color === Colors.BLACK ? blackPawnLogo : whitePawnLogo;
    this.name = FigureNames.PAWN;
  }
}