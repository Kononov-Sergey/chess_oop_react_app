import { CellClass } from "../CellModel";
import { Colors } from "../ColorsModel";
import { Figure, FigureNames } from "./FigureModel";

import blackPawnLogo from "../../assets/black-pawn.png";
import whitePawnLogo from "../../assets/white-pawn.png";

export class Pawn extends Figure {
  isFirstMove: boolean = true;

  constructor(cell: CellClass, color: Colors) {
    super(cell, color);
    this.logo = this.color === Colors.BLACK ? blackPawnLogo : whitePawnLogo;
    this.name = FigureNames.PAWN;
  }

  canMove(target: CellClass): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    const direction = this.cell.figure?.color === Colors.BLACK ? -1 : 1;
    const firstStepMoveDirection =
      this.cell.figure?.color === Colors.BLACK ? -2 : 2;

    if (
      target.y - this.cell.y === direction &&
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      target.figure !== null
    ) {
      return true;
    }

    if (
      (target.y === this.cell.y + direction || // first cell against our figure
        (this.isFirstMove &&
          target.y === this.cell.y + firstStepMoveDirection &&
          this.cell.board.getCell(target.x, target.y - 1).withoutAFigure())) && // checking, whether is a first move
      this.cell.board.getCell(target.x, target.y).withoutAFigure() && // checking, is cell has a figure within
      target.x === this.cell.x
    ) {
      return true;
    }
    return false;
  }
  moveFigure(target: CellClass): void {
    super.moveFigure(target);
    this.isFirstMove = false;
  }
}
