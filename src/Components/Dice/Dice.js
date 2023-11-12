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
        console.log(userInput);
        if(Validate(userInput)){
            let len =  userInput.length ;
            if(len<6){
                setDie1(userInput.concat(Array(6 - len).fill("0")));
            }           
            else{
                setDie1(userInput); 
            }
        }
    }

    const pick2die = ()=>{
        const userInput = input2.split(",");   
        if(Validate(userInput)){
            let len =  userInput.length ;
            if(len<6){
                setDie2(userInput.concat(Array(6 - len).fill("0")));
            }           
            else{
                setDie2(userInput); 
            }
        }
    }

    const handleRoll= ()=>{
        setResult1(dice1[Math.floor(Math.random()*(dice1.length))]);
        setResult2(dice2[Math.floor(Math.random()*(dice2.length))]);
    }

    return(
        <div className = "diceHolder" value = {num}>
                <div className="dice">
                    <div className="diceTop">
                        <div className="diceStat">
                            {dice1}
                        </div>
                        <div className="diceDisplay">
                            {result1}
                        </div>
                    </div>
                    <div className="'diceLow">
                        <div className="diceInput">
                            <input value={input1} onChange={changeInput1}></input>
                        </div>
                        <div className="diceButton">
                            <button onClick={pick1die}>Pick Player 1 dice</button>
                        </div>
                    </div>
                </div>

                <div className="dice">
                    <div className="diceTop">
                        <div className="diceStat">
                            {dice2}
                        </div>
                        <div className="diceDisplay">
                            {result2}
                        </div>
                    </div>
                    <div className="'diceLow">
                        <div className="diceInput">
                            <input value={input2} onChange={changeInput2}></input>
                        </div>
                        <div className="diceButton">
                            <button onClick={pick2die}>Pick Player 2 dice</button>
                        </div>
                    </div>
                </div>
              
           <div className="playButton">
                <button onClick={handleRoll}>Roll</button>
           </div>
        </div>
    );
}

export default Dice;