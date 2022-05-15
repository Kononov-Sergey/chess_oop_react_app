import React from "react";
import { CellClass } from "../../models/CellModel";
import classes from "./Cell.module.css";

interface CellProps {
  cell: CellClass;
}

const Cell: React.FC<CellProps> = (props) => {
  return (
    <div className={`${classes.cell} ${classes[props.cell.color]}`}>
      {props.cell.figure?.logo && (
        <img src={props.cell.figure.logo} alt={props.cell.figure.name}></img>
      )}
    </div>
  );
};

export default Cell;
