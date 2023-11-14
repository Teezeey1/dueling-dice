import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
function Login(){

    const navigate = useNavigate();
    const [blockNumber,setBlockNumber] = useState(0);

    const handleClick = ()=>{
        if (blockNumber === 0){
            alert("Please do not leave the input blank/ or put in 0");
        }
        else if(blockNumber%2 === 0){
            alert("Please enter an odd number");
        }
        else{
            navigate('/GameBoard/' + blockNumber);
        }
    }
    

    const handleChange = (e)=>{
        setBlockNumber(e.target.value);
    }

    return(
        <div className="login">
            <div className="loginHeader">
                <h1>Dueling Dice</h1>
            </div>

            <div className="loginContent">
                <h1>Please enter odd number for the path</h1>
                <input type="number" onChange={handleChange}></input>
            </div>

            <div className="playButton">
                <button onClick={handleClick}>Play!</button>
            </div>
        </div>
    );
}

export default Login;