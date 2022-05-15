import React from "react";
import { CellClass } from "../../models/CellModel";
import classes from "./Cell.module.css";

interface CellProps {
  cell: CellClass;
}

const Cell: React.FC<CellProps> = (props) => {
  return (
    <div className={`${classes.cell} ${classes[props.cell.color]}`}>Cell</div>
  );
};

export default Cell;
