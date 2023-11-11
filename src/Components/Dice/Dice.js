import Validate from "../UsefulFunction/Validate";
import "./Dice.css";
import { useState } from "react";

function Dice({result1, result2,setResult1,setResult2}){

    const num = 1;
    const [dice1,setDie1] = useState([]);
    const [dice2,setDie2] = useState([]);

    const[input1,setInput1] = useState("");
    const[input2,setInput2] = useState("");

    const changeInput1 = (e) =>{
        setInput1(e.target.value);
    }

    const changeInput2 = (e) =>{
        setInput2(e.target.value);
    }

    const pick1die = ()=>{
        const userInput = input1.split(",");   
        if(Validate(userInput)){
            setDie1(userInput); 
        }
    }

    const pick2die = ()=>{
        const userInput = input2.split(",");
        if(Validate(userInput))
        setDie2(userInput);
    }

    const handleRoll= ()=>{
        setResult1(dice1[Math.floor(Math.random()*(dice1.length))]);
        setResult2(dice2[Math.floor(Math.random()*(dice2.length))]);
    }

    return(
        <div className = "diceHolder" value = {num}>
                <div className="dice1">
                    <div className="diceStat1">
                        {dice1}
                    </div>
                    <div className="dice1Display">
                        {result1}
                    </div>
                    <input value={input1} onChange={changeInput1}></input>
                    <button onClick={pick1die}>Pick Player 1 dice</button>
                </div>
                <div className="dice2">
                    <div className="diceStat2">
                        {dice2}
                    </div>
                    <div className="dice2Display">
                        {result2}
                    </div>
                    <input value={input2} onChange={changeInput2}></input>
                    <button onClick={pick2die}>Pick Player 2 dice</button>
                </div>

           <div className="playButton">
                <button onClick={handleRoll}>Roll</button>
           </div>
        </div>
    );
}

export default Dice;