import { useState } from "react";

export default function TicTacToe() {
  const [table, setTable] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [player, setPlayer] = useState("X");

  const restartGame = () => {
    setTable([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setPlayer("X");
  };

  const handleClick = (row, col) => {
    if (table[row][col] === "") {
      let newTable = [...table];
      newTable[row][col] = player;
      setTable(newTable);
      setPlayer(player === "X" ? "O" : "X");
      checkWinner();
    }
  };

  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (table[i][0] === table[i][1] && table[i][1] === table[i][2] && table[i][0] !== "") {
        alert("Ganó " + table[i][0]);
      }
      if (table[0][i] === table[1][i] && table[1][i] === table[2][i] && table[0][i] !== "") {
        alert("Ganó " + table[0][i]);
      }
    }

    if (table[0][0] === table[1][1] && table[1][1] === table[2][2] && table[0][0] !== "") {
      alert("Ganó " + table[0][0]);
    }

    if (table[0][2] === table[1][1] && table[1][1] === table[2][0] && table[0][2] !== "") {
      alert("Ganó " + table[0][2]);
    }

    return "";
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="grid grid-cols-3 w-[120px]">
        {
          table.map((row, i) => {
            row.map((cell, j) => {
              <div key={i + j} className="border border-black border-solid w-10 h-10 flex justify-center items-center" onClick={() => handleClick(i, j)}>{cell}</div>
            })
          })
        }
        {
          /*
            <div className="border border-black border-solid w-10 h-10 flex justify-center items-center" onClick={() => handleClick(0,0)}>{table[0][0]}</div>
            <div className="border border-black border-solid w-10 h-10 flex justify-center items-center" onClick={() => handleClick(0,1)}>{table[0][1]}</div>
            <div className="border border-black border-solid w-10 h-10 flex justify-center items-center" onClick={() => handleClick(0,2)}>{table[0][2]}</div>
            <div className="border border-black border-solid w-10 h-10 flex justify-center items-center" onClick={() => handleClick(1,0)}>{table[1][0]}</div>
            <div className="border border-black border-solid w-10 h-10 flex justify-center items-center" onClick={() => handleClick(1,1)}>{table[1][1]}</div>
            <div className="border border-black border-solid w-10 h-10 flex justify-center items-center" onClick={() => handleClick(1,2)}>{table[1][2]}</div>
            <div className="border border-black border-solid w-10 h-10 flex justify-center items-center" onClick={() => handleClick(2,0)}>{table[2][0]}</div>
            <div className="border border-black border-solid w-10 h-10 flex justify-center items-center" onClick={() => handleClick(2,1)}>{table[2][1]}</div>
            <div className="border border-black border-solid w-10 h-10 flex justify-center items-center" onClick={() => handleClick(2,2)}>{table[2][2]}</div>
          */
        }
      </div>
      <button onClick={restartGame}>Reiniciar</button>
    </div>
  );
}
