import React from "react";
import { LostFigure } from "../../models/BoardModel";
import classes from "./LostFigures.module.css";

interface LostFiguresProps {
  lostFigureArray: LostFigure[];
  title: string;
}

const LostFigures: React.FC<LostFiguresProps> = (props) => {
  return (
    <aside>
      <h2>Lost {props.title} fig.</h2>
      {props.lostFigureArray.map((item) => {
        return (
          <div className={classes["figure-box"]} key={item.figure.id}>
            <h3>x{item.quantity}</h3>
            <img src={item.figure.logo || undefined} alt="" />
          </div>
        );
      })}
    </aside>
  );
};

export default LostFigures;
