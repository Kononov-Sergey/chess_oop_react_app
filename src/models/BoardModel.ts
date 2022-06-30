import { CellClass } from "./CellModel";
import { Colors } from "./ColorsModel";
import { Bishop } from "./figures/Bishop";
import { Figure } from "./figures/FigureModel";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

export type LostFigure = {
  quantity: number;
  figure: Figure;
};

export class BoardClass {
  cells: CellClass[][] = [];

  lostWhiteFigures: LostFigure[] = [];
  lostBlackFigures: LostFigure[] = [];

  public initBoard(): void {
    for (let i = 0; i < 8; i++) {
      const row: CellClass[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new CellClass(this, j, i, Colors.WHITE, null)); // white cell
        } else {
          row.push(new CellClass(this, j, i, Colors.BLACK, null)); // black cell
        }
      }
      this.cells.push(row);
    }
  }
  public getCell(x: number, y: number): CellClass {
    return this.cells[y][x];
  }

  public displayMoveForCell(selectedCell: CellClass | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const element = row[j];
        element.avalilable = !!selectedCell?.figure?.canMove(element);
      }
    }
  }

  public getNewBoard(): BoardClass {
    const newBoard = new BoardClass();
    newBoard.cells = this.cells;
    return newBoard;
  }

  private addBishop() {
    for (let i = 2; i < 6; i += 3) {
      new Bishop(this.getCell(i, 0), Colors.WHITE);
      new Bishop(this.getCell(i, 7), Colors.BLACK);
    }
  }

  private addKing() {
    new King(this.getCell(4, 0), Colors.WHITE);
    new King(this.getCell(4, 7), Colors.BLACK);
  }

  private addKhight() {
    for (let i = 1; i < 7; i += 5) {
      new Knight(this.getCell(i, 0), Colors.WHITE);
      new Knight(this.getCell(i, 7), Colors.BLACK);
    }
  }

  private addQueen() {
    new Queen(this.getCell(3, 0), Colors.WHITE);
    new Queen(this.getCell(3, 7), Colors.BLACK);
  }

  private addPawn() {
    for (let i = 0; i < 8; i++) {
      new Pawn(this.getCell(i, 1), Colors.WHITE);
      new Pawn(this.getCell(i, 6), Colors.BLACK);
    }
  }

  private addRook() {
    for (let i = 0; i < 8; i += 7) {
      new Rook(this.getCell(i, 0), Colors.WHITE);
      new Rook(this.getCell(i, 7), Colors.BLACK);
    }
  }

  public addAllFigures() {
    this.addBishop();
    this.addKing();
    this.addKhight();
    this.addQueen();
    this.addPawn();
    this.addRook();
  }
}
