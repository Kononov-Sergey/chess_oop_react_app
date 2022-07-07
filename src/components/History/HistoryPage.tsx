import React from "react";
import { BoardClass } from "../../models/BoardModel";
import LostFigures from "./LostFigures";
import classes from "./HistoryPage.module.css";

interface HistoryPageProps {
  board: BoardClass;
}

const HistoryPage: React.FC<HistoryPageProps> = (props) => {
  return (
    <aside className={classes.container}>
      <div className={classes["figure-block"]}>
        <LostFigures
          title={"чёрных"}
          lostFigureArray={props.board.lostBlackFigures}
        />
        <LostFigures
          title={"белых"}
          lostFigureArray={props.board.lostWhiteFigures}
        />
      </div>
    </aside>
  );
};

export default HistoryPage;
