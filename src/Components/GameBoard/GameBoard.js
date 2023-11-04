import Dice from "../Dice/Dice";
import DuelingGround from "../DuelingGround/DuelingGround";
import RacePath from "../RacePath/RacePath";
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
        <DuelingGround></DuelingGround>
    </div>
  );
}

export default GameBoard;