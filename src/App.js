import { useState } from "react";
import "./App.css";

function App() {
  const [history, setHistory] = useState([Array(81).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [selected, setSelected] = useState(Array(81).fill(false));
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <>
      <h1>Sudoku</h1>
      <Board squares={currentSquares} />
    </>
  );
}

function Board({ squares, onPlay }) {
  function handleClick(i) {
    if (squares[i])
      return;

    const nextSquares = squares.slice();
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div className="board-row">
        <Square value={squares[9]} onSquareClick={() => handleClick(9)} />
        <Square value={squares[10]} onSquareClick={() => handleClick(10)} />
        <Square value={squares[11]} onSquareClick={() => handleClick(11)} />
        <Square value={squares[12]} onSquareClick={() => handleClick(12)} />
        <Square value={squares[13]} onSquareClick={() => handleClick(13)} />
        <Square value={squares[14]} onSquareClick={() => handleClick(14)} />
        <Square value={squares[15]} onSquareClick={() => handleClick(15)} />
        <Square value={squares[16]} onSquareClick={() => handleClick(16)} />
        <Square value={squares[17]} onSquareClick={() => handleClick(17)} />
      </div>
      <div className="board-row">
        <Square value={squares[18]} onSquareClick={() => handleClick(18)} />
        <Square value={squares[19]} onSquareClick={() => handleClick(19)} />
        <Square value={squares[20]} onSquareClick={() => handleClick(20)} />
        <Square value={squares[21]} onSquareClick={() => handleClick(21)} />
        <Square value={squares[22]} onSquareClick={() => handleClick(22)} />
        <Square value={squares[23]} onSquareClick={() => handleClick(23)} />
        <Square value={squares[24]} onSquareClick={() => handleClick(24)} />
        <Square value={squares[25]} onSquareClick={() => handleClick(25)} />
        <Square value={squares[26]} onSquareClick={() => handleClick(26)} />
      </div>
      <div className="board-row">
        <Square value={squares[27]} onSquareClick={() => handleClick(27)} />
        <Square value={squares[28]} onSquareClick={() => handleClick(28)} />
        <Square value={squares[29]} onSquareClick={() => handleClick(29)} />
        <Square value={squares[30]} onSquareClick={() => handleClick(30)} />
        <Square value={squares[31]} onSquareClick={() => handleClick(31)} />
        <Square value={squares[32]} onSquareClick={() => handleClick(32)} />
        <Square value={squares[33]} onSquareClick={() => handleClick(33)} />
        <Square value={squares[34]} onSquareClick={() => handleClick(34)} />
        <Square value={squares[35]} onSquareClick={() => handleClick(35)} />
      </div>
      <div className="board-row">
        <Square value={squares[36]} onSquareClick={() => handleClick(36)} />
        <Square value={squares[37]} onSquareClick={() => handleClick(37)} />
        <Square value={squares[38]} onSquareClick={() => handleClick(38)} />
        <Square value={squares[39]} onSquareClick={() => handleClick(39)} />
        <Square value={squares[40]} onSquareClick={() => handleClick(40)} />
        <Square value={squares[41]} onSquareClick={() => handleClick(41)} />
        <Square value={squares[42]} onSquareClick={() => handleClick(42)} />
        <Square value={squares[43]} onSquareClick={() => handleClick(43)} />
        <Square value={squares[44]} onSquareClick={() => handleClick(44)} />
      </div>
      <div className="board-row">
        <Square value={squares[45]} onSquareClick={() => handleClick(45)} />
        <Square value={squares[46]} onSquareClick={() => handleClick(46)} />
        <Square value={squares[47]} onSquareClick={() => handleClick(47)} />
        <Square value={squares[48]} onSquareClick={() => handleClick(48)} />
        <Square value={squares[49]} onSquareClick={() => handleClick(49)} />
        <Square value={squares[50]} onSquareClick={() => handleClick(50)} />
        <Square value={squares[51]} onSquareClick={() => handleClick(51)} />
        <Square value={squares[52]} onSquareClick={() => handleClick(52)} />
        <Square value={squares[53]} onSquareClick={() => handleClick(53)} />
      </div>
      <div className="board-row">
        <Square value={squares[54]} onSquareClick={() => handleClick(54)} />
        <Square value={squares[55]} onSquareClick={() => handleClick(55)} />
        <Square value={squares[56]} onSquareClick={() => handleClick(56)} />
        <Square value={squares[57]} onSquareClick={() => handleClick(57)} />
        <Square value={squares[58]} onSquareClick={() => handleClick(58)} />
        <Square value={squares[59]} onSquareClick={() => handleClick(59)} />
        <Square value={squares[60]} onSquareClick={() => handleClick(60)} />
        <Square value={squares[61]} onSquareClick={() => handleClick(61)} />
        <Square value={squares[62]} onSquareClick={() => handleClick(62)} />
      </div>
      <div className="board-row">
        <Square value={squares[63]} onSquareClick={() => handleClick(63)} />
        <Square value={squares[64]} onSquareClick={() => handleClick(64)} />
        <Square value={squares[65]} onSquareClick={() => handleClick(65)} />
        <Square value={squares[66]} onSquareClick={() => handleClick(66)} />
        <Square value={squares[67]} onSquareClick={() => handleClick(67)} />
        <Square value={squares[68]} onSquareClick={() => handleClick(68)} />
        <Square value={squares[69]} onSquareClick={() => handleClick(69)} />
        <Square value={squares[70]} onSquareClick={() => handleClick(70)} />
        <Square value={squares[71]} onSquareClick={() => handleClick(71)} />
      </div>
      <div className="board-row">
        <Square value={squares[72]} onSquareClick={() => handleClick(72)} />
        <Square value={squares[73]} onSquareClick={() => handleClick(73)} />
        <Square value={squares[74]} onSquareClick={() => handleClick(74)} />
        <Square value={squares[75]} onSquareClick={() => handleClick(75)} />
        <Square value={squares[76]} onSquareClick={() => handleClick(76)} />
        <Square value={squares[77]} onSquareClick={() => handleClick(77)} />
        <Square value={squares[78]} onSquareClick={() => handleClick(78)} />
        <Square value={squares[79]} onSquareClick={() => handleClick(79)} />
        <Square value={squares[80]} onSquareClick={() => handleClick(80)} />
      </div>
    </>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default App;
