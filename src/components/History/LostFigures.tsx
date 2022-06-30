import React from "react";
import { LostFigure } from "../../models/BoardModel";

interface LostFiguresProps {
  lostFigureArray: LostFigure[];
  title: string;
}

const LostFigures: React.FC<LostFiguresProps> = (props) => {
  return (
    <aside>
      <h2>Фигуры {props.title}</h2>
      {props.lostFigureArray.map((item) => {
        return (
          <div key={item.figure.id}>
            <h3>{item.quantity}</h3>
            <img src={item.figure.logo || undefined} alt="" />
          </div>
        );
      })}
    </aside>
  );
};

export default LostFigures;
