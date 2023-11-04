import Dice from "../Dice/Dice";
import Turn from "../Turn/Turn";
import "./GameBoard.css";

import { useState } from 'react';


function GameBoard() {

  const[player1Turn,setPlayer1Turn] = useState(true);


//   const handleTurnChange = ()=>{
//       setPlayer1Turn(!player1Turn);
//   }

  return (
    <div className='gameBoard'>
    <Turn player1Turn = {player1Turn}></Turn>
    <Dice></Dice>
    </div>
  );
}

export default GameBoard;