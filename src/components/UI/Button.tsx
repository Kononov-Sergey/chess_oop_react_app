import React, { useState } from "react";
import classes from "./Button.module.css";

interface btnProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<btnProps> = (props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const onBtnClick = () => {
    props.onClick();
    setIsClicked((state) => !state);
  };
  return (
    <button
      className={`${classes.btn} ${isClicked && classes.clicked}`}
      onClick={onBtnClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
