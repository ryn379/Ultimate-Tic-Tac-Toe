import { useState } from "react";
import "./App.css";

export default function App() {
  const [boards, setBoards] = useState(
    Array(9)
      .fill(null)
      .map(() => Array(9).fill(null))
  );
  const [isXNext, setIsXNext] = useState(true);
  const [activeBoard, setActiveBoard] = useState(null);
  const [boardCnt, setBoardCnt] = useState(Array(9).fill(null));

  const move = (bindex, cindex) => {
    if (
      activeBoard !== null &&
      activeBoard !== bindex &&
      !boardCnt[activeBoard]
    ) {
      alert("Play in the correct board!");
      return;
    }

    if (boards[bindex][cindex] || boardCnt[bindex]) return;

    const newBoards = boards.map((b, i) =>
      i === bindex
        ? b.map((val, j) => (j === cindex ? (isXNext ? "X" : "O") : val))
        : b
    );
    setBoards(newBoards);
    const win = winCheck(newBoards[bindex]);
    const newBoard = [...boardCnt];
    if (win) {
      if (!boardCnt[bindex]) {
        newBoard[bindex] = win;
        setBoardCnt(newBoard);
      }
    }
    setIsXNext(!isXNext);
    setActiveBoard(newBoard[cindex] ? null : cindex);
    console.log(newBoards);
    console.log(newBoard);
  };
  const winCheck = (board) => {
    if (board[0] && board[0] === board[1] && board[0] === board[2]) {
      return board[0];
    }
    if (board[3] && board[3] === board[4] && board[3] === board[5]) {
      return board[3];
    }
    if (board[6] && board[6] === board[7] && board[6] === board[8]) {
      return board[6];
    }
    if (board[0] && board[0] === board[3] && board[0] === board[6]) {
      return board[0];
    }
    if (board[1] && board[1] === board[4] && board[1] === board[7]) {
      return board[7];
    }
    if (board[2] && board[2] === board[5] && board[2] === board[8]) {
      return board[8];
    }
    if (board[0] && board[0] === board[4] && board[0] === board[8]) {
      return board[8];
    }
    if (board[2] && board[2] === board[4] && board[2] === board[6]) {
      return board[2];
    }
    return false;
  };
  const [showRules, setShowRules] = useState(true);
  if (showRules) {
    return <Rules onStart={() => setShowRules(false)} />;
  }
  return (
    <div className="board">
      <span className="big-vertical first"></span>
      <span className="big-vertical second"></span>
      {boards.map((squares, i) => (
        <Tic
          key={i}
          index={i}
          squares={squares}
          onClick={(cindex) => move(i, cindex)}
          isActive={activeBoard === null || activeBoard === i}
          winner={winCheck}
        />
      ))}
    </div>
  );
}

function Tic({ squares, onClick, isActive, winner }) {
  let winResult = winner(squares);
  if (winResult === false) {
    return (
      <div className={`tic-container ${isActive ? "active" : "inactive"}`}>
        <div className="horizontal-div">
          <span className="horizontal"></span>
          <span className="horizontal"></span>
        </div>
        <div className="vertical-div">
          <span className="vertical"></span>
          <span className="vertical"></span>
        </div>
        <div className="squares">
          {squares.map((value, i) => (
            <div
              key={i}
              className="square"
              onClick={() => isActive && onClick(i)}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`tic-container${
          winResult ? "-won" : isActive ? "-active" : "-inactive"
        }`}
      >
        <p>{winResult}</p>
      </div>
    );
  }
}
function Rules({ onStart }) {
  return (
    <div className="rules-page">
      <h1>Ultimate Tic-Tac-Toe Rules</h1>
      <ul>
        <li>The game is played on 9 tic-tac-toe boards.</li>
        <li>Players take turns playing in a small board.</li>
        <li>
          The board you play in dictates the board for your opponent's next
          turn.
        </li>
        <li>Winning a small board contributes to the ultimate game.</li>
        <li>First to get three in a row in the big board wins!</li>
      </ul>
      <button onClick={onStart}>Start Game</button>
    </div>
  );
}
