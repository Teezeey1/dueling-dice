import { useNavigate } from 'react-router-dom';
import './SimulationMode.css';
import Validate from '../UsefulFunction/Validate';
import { useState } from 'react';
import SimulationTest from '../UsefulFunction/SimulationTest';

function SimulationMode (){

    const navigate = useNavigate();
    const [dice1,setDie1] = useState([]);
    const [dice2,setDie2] = useState([]);
    const [pathLength,setPathLength] = useState(0);
    const [ilteration,setIteration] = useState(0);
    const[input1,setInput1] = useState("");
    const[input2,setInput2] = useState("");
    const[input3,setInput3] = useState(0);
    const[input4,setInput4] = useState(0);
    const[time1, setTime1] = useState(0);
    const [time2,setTime2] = useState(0);

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

    const calculateWinning = async ()=>{
        if(dice1.length === 0 || dice2.length===0){
            alert("Please set dice for both player");
        }
        else if (pathLength === 0){
            alert("Please set path Length");
        }
        else if (ilteration === 0){
            alert("Please set iterations");
        }
        else{
            const[time1Won, time2Won] = await SimulationTest(dice1,dice2,pathLength,ilteration);
            setTime1(time1Won);
            setTime2(time2Won);
        }
    }

    const changeInput3 = (e)=>{
        setInput3(e.target.value);
    }

    const changeInput4 = (e)=>{
        setInput4(e.target.value);
    }

    const handlePathLength = () =>{
        if(input3 === 0){
            alert("Please enter a path length/do not enter 0");
        }
        else if (input3%2 === 0){
            alert("please enter an odd number");
        }
        else{
            setPathLength(input3);
        }
    }

    const handleiteration = () =>{
        if(input4 <=0){
            alert("Enter an iteration");
        }
        else if (input4 >=10000000){
            alert("Too big of iteration");
        }
        else {
            setIteration(input4);
        }
    }


    const backToLogin = () =>{
        navigate('/dueling-dice');
    }

    return(
        <div className = "simulationMode">
        <div className='Top'>
            <div className="dice">
                <div className="diceTop">
                    <label>Dice Status:</label>
                    <div className="diceStat">
                        {dice1}
                    </div>
                </div>
                <div className="'diceLow">
                <label>Input dice value:</label>
                    <div className="diceInput">
                        <input value={input1} style={{width: "100%"}} onChange={changeInput1}></input>
                    </div>
                    <div className="playButton">
                        <button className='active' onClick={pick1die}>Pick Player 1 dice</button>
                    </div>
                </div>
            </div>

            <div className="dice">
                <div className="diceTop">
                     <label>Dice Status:</label>
                    <div className="diceStat">
                        {dice2}
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

        <div className='Low'>
            <div className='pathtLengthBox'>
                <div className='pathLengthInput'>
                    <label>Set odd path length:</label>
                    <input type="number" style={{width: "30%"}} onChange={changeInput3}></input>
                    <div className="playButton">
                        <button onClick={handlePathLength}>Set Length</button>
                </div>
                </div>
                <div className='pathLengthInput'>
                    <label>Set iteration:</label>
                    <input type="number" style={{width: "25%"}} onChange={changeInput4}></input>
                    <div className="playButton">
                        <button onClick={handleiteration}>Set iteration</button>
                </div>
                </div>

            </div>

            <div className='resultBoard'>
                <div className='playerScore'>
                    <label>Time Player 1 won:</label>
                    <div>{time1}</div>
                </div>
                <div className='playerScore'>
                    <label>Time Player 2 won:</label>
                    <div>{time2}</div>
                </div>            
            </div>

            <div className='buttonLow'>
                <div className="playButton">
                            <button onClick={calculateWinning}>Calculate</button>
                </div>
                <div className="playButton">
                        <button onClick={backToLogin}>Go Back</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default SimulationMode;