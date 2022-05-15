import { CellClass } from "./CellModel";
import { Colors } from "./ColorsModel";

export class BoardClass {
  cells: CellClass[][] = [];

  public initBoard() {
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
}
