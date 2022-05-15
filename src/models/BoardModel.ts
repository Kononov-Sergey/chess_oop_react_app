import { CellClass } from "./CellModel";
import { Colors } from "./ColorsModel";
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

export class BoardClass {
  cells: CellClass[][] = [];

  public initBoard() {
    for (let i = 0; i < 8; i++) {
      const row: CellClass[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new CellClass(this, i, j, Colors.WHITE, null)); // white cell
        } else {
          row.push(new CellClass(this, i, j, Colors.BLACK, null)); // black cell
        }
      }
      this.cells.push(row);
    }
  }
  public getCell(x: number, y: number) {
    return this.cells[x][y];
  }

  private addBishop() {
    for (let i = 2; i < 6; i += 3) {
      new Bishop(this.getCell(0, i), Colors.WHITE);
      new Bishop(this.getCell(7, i), Colors.BLACK);
    }
  }

  private addKing() {
    new King(this.getCell(0, 3), Colors.WHITE);
    new King(this.getCell(7, 3), Colors.BLACK);
  }

  private addKhight() {
    for (let i = 1; i < 7; i += 5) {
      new Knight(this.getCell(0, i), Colors.WHITE);
      new Knight(this.getCell(7, i), Colors.BLACK);
    }
  }

  private addQueen() {
    new Queen(this.getCell(0, 4), Colors.WHITE);
    new Queen(this.getCell(7, 4), Colors.BLACK);
  }

  private addPawn() {
    for (let i = 0; i < 8; i++) {
      new Pawn(this.getCell(1, i), Colors.WHITE);
      new Pawn(this.getCell(6, i), Colors.BLACK);
    }
  }

  private addRook() {
    for (let i = 0; i < 8; i += 7) {
      new Rook(this.getCell(0, i), Colors.WHITE);
      new Rook(this.getCell(7, i), Colors.BLACK);
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
