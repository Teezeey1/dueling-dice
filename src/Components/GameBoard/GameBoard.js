import DuelingGround from "../DuelingGround/DuelingGround";
import "./GameBoard.css";
import { useParams } from "react-router-dom";

function GameBoard() {

  const {blockNumber} = useParams();

  return (
    <div className='gameBoard'>
        <div className="duelingGroundHolder">
            <DuelingGround numberOfBlock={Number(blockNumber)}></DuelingGround>
        </div>
    </div>       
  );
}

export default GameBoard;