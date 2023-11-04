import { useState } from "react";
import Dice from "../Dice/Dice";
import RacePath from "../RacePath/RacePath";
import "./DuelingGround.css";

function DuelingGround(){

    const[result1,setResult1] = useState(0);
    const[result2,setResult2] = useState(0);

    return(
        <div className="duelingGround"> 
            <div className="diceHolder">
                <Dice result1={result1} result2={result2} setResult1={setResult1} setResult2={setResult2}></Dice>
            </div>

            <div className="racePathHolder">
                <RacePath result1={result1} result2={result2}></RacePath>
            </div>
        </div>
    );
}

export default DuelingGround;