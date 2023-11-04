import Dice from "../Dice/Dice";
import "./DuelingGround.css";

function DuelingGround(){



    return(
        <div className="duelingGround"> 
            <div className="diceHolder">
                <Dice></Dice>
                <Dice></Dice>
            </div>

            <div className="racePath">
                
            </div>
        </div>
    );
}

export default DuelingGround;