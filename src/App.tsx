import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import Board from "./components/Board/Board";
import { BoardClass } from "./models/BoardModel";
const App = () => {
  const [board, setBoard] = useState(new BoardClass());

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new BoardClass();
    newBoard.initBoard();
    setBoard(newBoard);
  }
  return (
    <section className={classes.container}>
      <Board board={board} setBoard={setBoard} />
    </section>
  );
};

export default App;
