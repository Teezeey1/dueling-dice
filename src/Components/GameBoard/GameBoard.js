import DuelingGround from "../DuelingGround/DuelingGround";
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
        <div className="turnHolder">
            <Turn player1Turn = {player1Turn}></Turn>
        </div>
        <div className="duelingGroundHolder">
            <DuelingGround></DuelingGround>
        </div>
    </div>       
  );
}

export default GameBoard;