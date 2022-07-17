import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import Board from "./components/Board/Board";
import Timer from "./components/Board/Timer";
import HistoryPage from "./components/History/HistoryPage";
import LostFigures from "./components/History/LostFigures";
import { BoardClass } from "./models/BoardModel";
import { Colors } from "./models/ColorsModel";
import { PlayerClass } from "./models/PlayerModel";
const App = () => {
  const [board, setBoard] = useState(new BoardClass());
  const [whitePlayer, setWhitePlayer] = useState(new PlayerClass(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new PlayerClass(Colors.BLACK));
  const [currnetPlayer, setCurrnetPlayer] = useState<PlayerClass | null>(null);
  const [isFistClick, setIsFirstClick] = useState<boolean>(true);
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
    <>
      <header className={classes.header}>
        <h1>ChesS_K</h1>
        <p>Chess game made by Sergey Kononov using OOP code style</p>
      </header>
      <section className={classes.container}>
        <Timer
          currentPlayer={currnetPlayer}
          restart={restart}
          isFirstClick={isFistClick}
          setIsFirstClick={setIsFirstClick}
        />

        <Board
          board={board}
          setBoard={setBoard}
          currentPlayer={currnetPlayer}
          swapPlayer={changeCurrentPlayer}
        />
        <HistoryPage board={board} />
      </section>
    </>
  );
};

export default App;
