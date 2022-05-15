import React from "react";
import { BoardClass } from "../../models/BoardModel";
import Cell from "../Cell/Cell";
import classes from "./Board.module.css";

interface BoardProps {
  board: BoardClass;
  setBoard: (board: BoardClass) => void;
}

const Board: React.FC<BoardProps> = (props) => {
  return (
    <div className={classes.board}>
      {props.board.cells.map((row, index) => {
        return (
          <React.Fragment key={index}>
            {row.map((cell, index) => {
              return <Cell cell={cell} />;
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Board;
