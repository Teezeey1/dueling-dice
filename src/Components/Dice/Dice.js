import { useNavigate } from "react-router-dom";
import Validate from "../UsefulFunction/Validate";
import "./Dice.css";
import { useState } from "react";

function Dice({result1, result2,setResult1,setResult2,clickRoll,setClickRoll}){

    const navigate = useNavigate();
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

    const backToLogin = () =>{
        navigate('/dueling-dice');
    }

    const handleRoll= ()=>{
        if(dice1.length=== 0 || dice2.length === 0){
            alert("Please set dice for all players");
        }
        else{
            setResult1(dice1[Math.floor(Math.random()*(dice1.length))]);
            setResult2(dice2[Math.floor(Math.random()*(dice2.length))]);
            setClickRoll(clickRoll + 1);
        }
    }

    return(
        <div className = "diceHolder">
            <div className="topTop">
                <div className="dice">
                    <div className="diceTop">
                        <label>dice status:</label>
                        <div className="diceStat">
                            {dice1}
                        </div>
                        <label>dice roll:</label>
                        <div className="diceDisplay">
                            {result1}
                        </div>
                    </div>
                    <div className="'diceLow">
                        <div className="diceInput">
                            <label>Input dice value:</label>
                            <input value={input1} style={{width: "100%"}} onChange={changeInput1}></input>
                        </div>
                        <div className="playButton">
                            <button onClick={pick1die}>Pick Player 1 dice</button>
                        </div>
                    </div>
                </div>

                <div className="dice">
                    <div className="diceTop">
                    <label>dice status:</label>
                        <div className="diceStat">
                            {dice2}
                        </div>
                        <label>dice roll:</label>
                        <div className="diceDisplay">
                            {result2}
                        </div>
                    </div>
                    <div className="'diceLow">
                        <div className="diceInput">
                        <label>Input dice value:</label>
                            <input value={input2} style={{width: "100%"}} onChange={changeInput2}></input>
                        </div>
                        <div className="playButton">
                            <button onClick={pick2die}>Pick Player 2 dice</button>
                        </div>
                    </div>
                </div>
            </div>
              
            <div className="lowLow">
            <div className="playButton">
                    <button onClick={handleRoll}>Roll</button>
            </div>

            <div className="playButton">
                    <button onClick={backToLogin}>Go Back</button>
            </div>
           </div>  
        </div>
    );
}

export default Dice;