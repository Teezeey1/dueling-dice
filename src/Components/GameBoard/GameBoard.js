import DuelingGround from "../DuelingGround/DuelingGround";
import "./GameBoard.css";

function GameBoard() {



  return (
    <div className='gameBoard'>
        <div className="duelingGroundHolder">
            <DuelingGround></DuelingGround>
        </div>
    </div>       
  );
}

export default GameBoard;