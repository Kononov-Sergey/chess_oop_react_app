import React from "react";
import { CellClass } from "../../models/CellModel";
import classes from "./Cell.module.css";

interface CellProps {
  cell: CellClass;
  isSelected: boolean;
  onCellClick: (cell: CellClass) => void;
}

const Cell: React.FC<CellProps> = (props) => {
  return (
    <div
      className={`
        ${classes.cell} 
        ${classes[props.cell.color]} 
        ${props.cell.figure ? classes.pointer : ""} 
        ${props.isSelected ? classes.selected : ""} 
        ${props.cell.avalilable && props.cell.figure && classes["capture"]}
      `}
      onClick={props.onCellClick.bind(null, props.cell)}
    >
      {props.cell.avalilable && !props.cell.figure && (
        <div className={classes["allowed-to-move"]} />
      )}
      {props.cell.figure?.logo && (
        <img src={props.cell.figure.logo} alt={props.cell.figure.name}></img>
      )}
    </div>
  );
};

export default Cell;
