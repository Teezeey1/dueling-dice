import { useNavigate, useParams } from "react-router-dom";
import "./Result.css";

function Result(){
    const navigate = useNavigate();
    const{result} = useParams();
    const handleClick = ()=>{
        navigate('/dueling-dice');
    }

    return(
        <div className="result">
            <h1>{result}</h1>
            <div className="playButton">
                <button onClick={handleClick}>Play Again</button>
            </div>
        </div>
    );
}

export default Result;