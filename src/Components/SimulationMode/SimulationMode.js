import { useNavigate } from 'react-router-dom';
import './SimulationMode.css';
import Validate from '../UsefulFunction/Validate';
import { useState } from 'react';

function SimulationMode (){

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

    const calculateWinning =()=>{

    }

    const backToLogin = () =>{
        navigate('/dueling-dice');
    }

    return(
        <div className = "simulationMode">
        <div className='Top'>
            <div className="dice">
                <div className="diceTop">
                    <div className="diceStat">
                        {dice1}
                    </div>
                </div>
                <div className="'diceLow">
                    <div className="diceInput">
                        <input value={input1} style={{width: "100%"}} onChange={changeInput1}></input>
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
                </div>
                <div className="'diceLow">
                    <div className="diceInput">
                        <input value={input2} style={{width: "100%"}} onChange={changeInput2}></input>
                    </div>
                    <div className="diceButton">
                        <button onClick={pick2die}>Pick Player 2 dice</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='Low'>
            <div className="playButton">
                    <button onClick={calculateWinning}>Calculate</button>
            </div>

            <div className="playButton">
                    <button onClick={backToLogin}>Go Back</button>
            </div>
        </div>
    </div>
    );
}

export default SimulationMode;