import React, { useEffect, useState } from "react"
import SquareComponent from "./Components/SquareComponent";

function App() {

  const [gameState, setGameState] = useState(Array(9).fill(""))
  const [xTurn, setXTurn] = useState(true)
  const [winnerLetter, setWinnerLetter] = useState()

  const onSquareClick = (index) => {
    const table = gameState;
    if(table[index] === "" && !winnerLetter){
      table[index] = xTurn? "X" : "O"
      setGameState(table)
      setXTurn(!xTurn)
    }
  }

  useEffect(()=>{
    console.log(gameState);
  const winner = calculateWinner()
  if(winner){
    setWinnerLetter(winner)
  }
  }, [xTurn])
 
  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }

  const handleClearTable = () => {
    setGameState(Array(9).fill(""))
    setWinnerLetter()
    setXTurn(true)
  }

  return (
    <div className="app-header">
      <h1 className="heading-text">Tic-Tac Toe</h1>
      <div className={winnerLetter? "winner active" : "winner"}>{winnerLetter && `Winner is ${winnerLetter}`}</div>
      <div className=" row jc-center ">
      <SquareComponent 
      className="b-bottom-right" 
      state={gameState[0]}
      onClick={()=>onSquareClick(0)}
      />
      <SquareComponent 
      className="b-bottom-right"
      state={gameState[1]}
      onClick={()=>onSquareClick(1)}
      />
      <SquareComponent 
      className="b-bottom" 
      state={gameState[2]}
      onClick={()=>onSquareClick(2)}
      />
      </div>
      <div className=" row jc-center ">
      <SquareComponent 
      className="b-bottom-right" 
      state={gameState[3]}
      onClick={()=>onSquareClick(3)}
      />
      <SquareComponent 
      className="b-bottom-right" 
      state={gameState[4]}
      onClick={()=>onSquareClick(4)}
      />
      <SquareComponent 
      className="b-bottom" 
      state={gameState[5]}
      onClick={()=>onSquareClick(5)}
      />
      </div>
      <div className=" row jc-center ">
      <SquareComponent 
      className="b-right" 
      state={gameState[6]}
      onClick={()=>onSquareClick(6)}
      />
      <SquareComponent 
      className="b-right" 
      state={gameState[7]}
      onClick={()=>onSquareClick(7)}
      />
      <SquareComponent 
      className="" 
      state={gameState[8]}
      onClick={()=>onSquareClick(8)}
      />
      </div>
      <button 
      className={winnerLetter? "start-button" : "clear-button"}
      onClick={()=>{handleClearTable()}}
      >
        {winnerLetter? "Start Game" : "Clear Game"}
      </button>
    </div>
  );
}

export default App;
