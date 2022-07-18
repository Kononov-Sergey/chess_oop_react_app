import React, { useEffect, useState } from "react";
import { BoardClass } from "../../models/BoardModel";
import { CellClass } from "../../models/CellModel";
import { PlayerClass } from "../../models/PlayerModel";
import Cell from "../Cell/Cell";
import classes from "./Board.module.css";

interface BoardProps {
  board: BoardClass;
  setBoard: (board: BoardClass) => void;
  currentPlayer: PlayerClass | null;
  swapPlayer: () => void;
  isFirstClick: boolean;
}

const Board: React.FC<BoardProps> = (props) => {
  const [selectedCell, setSelectedCell] = useState<CellClass | null>(null);

  const displayAvaliableMove = () => {
    props.board.displayMoveForCell(selectedCell);
    updateBoard();
  };

  const updateBoard = () => {
    const newBoard = props.board.getNewBoard();
    newBoard.lostBlackFigures = props.board.lostBlackFigures;
    newBoard.lostWhiteFigures = props.board.lostWhiteFigures;
    props.setBoard(newBoard);
  };

  const clickOnCellHandler = (cell: CellClass) => {
    if (
      selectedCell?.figure &&
      selectedCell !== cell &&
      selectedCell.figure.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      props.swapPlayer();
      setSelectedCell(null);
    } else {
      if (cell.figure?.color === props.currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  };

  const checkCellSelect = (cell: CellClass) => {
    if (cell.id === selectedCell?.id) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    displayAvaliableMove();
  }, [selectedCell]);

  return (
    <div className={classes.board}>
      {props.board.cells.map((row, index) => {
        return (
          <React.Fragment key={index}>
            {row.map((cell) => {
              return (
                <Cell
                  key={cell.id}
                  cell={cell}
                  isSelected={checkCellSelect(cell)}
                  onCellClick={clickOnCellHandler}
                />
              );
            })}
          </React.Fragment>
        );
      })}
      {props.isFirstClick && <div className={classes.wrapper} />}
    </div>
  );
};

export default Board;
