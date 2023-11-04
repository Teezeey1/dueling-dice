import Dice from "../Dice/Dice";
import RacePath from "../RacePath/RacePath";
import "./DuelingGround.css";

function DuelingGround(){



    return(
        <div className="duelingGround"> 
            <div className="diceHolder">
                <Dice></Dice>
                <Dice></Dice>
            </div>

            <div className="racePathHolder">
                <RacePath></RacePath>
            </div>
        </div>
    );
}

export default DuelingGround;