import "./Dice.css";
import { useState } from "react";

function Dice(){

    const num = 1;
    const diceFace = 6;

    // const dice1 = Array(diceFace).fill(0);
    // const dice2 = Array(diceFace).fill(1);

    const dice1 = [3,2,4,5,6,7];
    const dice2 = [4,15,10,3,9,1];


    const [result1,setResult1] = useState(dice1[0]);
    const [result2,setResult2] = useState(dice2[0]);

    const handleRoll= ()=>{
        setResult1(dice1[Math.floor(Math.random()*(dice1.length))]);
        setResult2(dice2[Math.floor(Math.random()*(dice2.length))]);
    }

    return(
        <div className = "diceHolder2" value = {num}>
                <div className="dice1">
                    <div className="diceStat1">
                        {dice1}
                    </div>
                    <div className="dice1Display">
                        {result1}
                    </div>
                </div>
                <div className="dice2">
                    <div className="diceStat2">
                        {dice2}
                    </div>
                    <div className="dice2Display">
                        {result2}
                    </div>
                </div>

           <div className="playButton">
                <button onClick={handleRoll}>Roll</button>
           </div>
        </div>
    );
}

export default Dice;