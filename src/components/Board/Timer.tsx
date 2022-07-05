import React, { useEffect, useState } from "react";
import { Colors } from "../../models/ColorsModel";
import { PlayerClass } from "../../models/PlayerModel";
import { makePrettyTime } from "../utility/makePrettyTime";

interface TimerProps {
  currentPlayer: PlayerClass | null;
  restart: () => void;
  isFirstClick: boolean;
  setIsFirstClick: (newState: boolean) => void;
}

let blackTimerIntervalId: NodeJS.Timer;
let whiteTimerIntervalId: NodeJS.Timer;

const Timer: React.FC<TimerProps> = (props) => {
  const [whiteTime, setWhiteTime] = useState<number>();
  const [blackTime, setBlackTime] = useState<number>();

  const restartGame = () => {
    if (props.isFirstClick) {
      props.setIsFirstClick(false);
    } else {
      props.setIsFirstClick(true);
      clearInterval(blackTimerIntervalId);
      clearInterval(whiteTimerIntervalId);
      props.restart();
    }
    setWhiteTime(60_000);
    setBlackTime(60_000);
  };

  useEffect(() => {
    if (!props.isFirstClick) {
      clearInterval(blackTimerIntervalId);
      clearInterval(whiteTimerIntervalId);
      if (props.currentPlayer?.color === Colors.BLACK) {
        blackTimerIntervalId = setInterval(() => {
          setBlackTime((state) => {
            if (state === undefined) {
              return;
            }
            if (state === 0) {
              restartGame();
              alert("белые выиграли");
            }
            return state - 10;
          });
        }, 10);
      } else {
        whiteTimerIntervalId = setInterval(() => {
          setWhiteTime((state) => {
            if (state === undefined) {
              return;
            }
            if (state === 0) {
              restartGame();
              alert("чёрные выиграли");
            }
            return state - 10;
          });
        }, 10);
      }
    }
  }, [props.currentPlayer, props.isFirstClick]);
  return (
    <div>
      <div>
        <button onClick={restartGame}>
          {props.isFirstClick ? "Start" : "Restart"}
        </button>
        {!props.isFirstClick && (
          <>
            <h2>
              Время чёрных - <time>{makePrettyTime(blackTime || 0)}</time>
            </h2>
            <h2>
              Время белых - <time>{makePrettyTime(whiteTime || 0)}</time>
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Timer;
