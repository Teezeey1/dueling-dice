import { useEffect, useState } from "react";
import PathBlock from "./PathBlock";
import "./RacePath.css";
import { useNavigate } from "react-router-dom";

function RacePath({result1,result2,clickRoll,numberOfBlock}){

    const PathLength = numberOfBlock;
    const navigate = useNavigate();
    const [circlePosition,setCirclePosition] = useState(Math.floor(PathLength/2));

    useEffect(
        ()=>{
            if(Number(result1) < Number(result2)){
                setCirclePosition(circlePosition - 1);
            }
            else if (Number(result1) > Number(result2)){
                setCirclePosition(circlePosition + 1);
            }
        },
        [clickRoll]
    );

    if(circlePosition === 0){
        navigate("/Result/" + "Player2 Won")
    }
    else if (circlePosition === PathLength - 1){
        navigate("/Result/" + "Player1 Won")
    }

    const path = [];
    for(let i = 0; i < PathLength;++i){
        path[i] = i;
    }

    const pathBlock = path.map((number)=>  
        <PathBlock numberOfBlock={number} key={number} active={circlePosition === number}></PathBlock>
    );

    return(
        <div className="racePath">
            {pathBlock}
        </div>
    );
}

export default RacePath;