import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import Board from "./components/Board/Board";
import LostFigures from "./components/History/LostFigures";
import { BoardClass } from "./models/BoardModel";
import { Colors } from "./models/ColorsModel";
import { PlayerClass } from "./models/PlayerModel";
const App = () => {
  const [board, setBoard] = useState(new BoardClass());
  const [whitePlayer, setWhitePlayer] = useState(new PlayerClass(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new PlayerClass(Colors.BLACK));
  const [currnetPlayer, setCurrnetPlayer] = useState<PlayerClass | null>(null);
  useEffect(() => {
    setCurrnetPlayer(whitePlayer);
    restart();
  }, []);

  function changeCurrentPlayer() {
    setCurrnetPlayer((state) =>
      state?.color === Colors.BLACK ? whitePlayer : blackPlayer
    );
  }

  function restart() {
    const newBoard = new BoardClass();
    newBoard.initBoard();
    newBoard.addAllFigures();
    setBoard(newBoard);
  }
  return (
    <section className={classes.container}>
      <Board
        board={board}
        setBoard={setBoard}
        currentPlayer={currnetPlayer}
        swapPlayer={changeCurrentPlayer}
      />
      <LostFigures title={"чёрных"} lostFigureArray={board.lostBlackFigures} />
      <LostFigures title={"белых"} lostFigureArray={board.lostWhiteFigures} />
    </section>
  );
};

export default App;
