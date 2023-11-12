import { useEffect, useState } from "react";
import PathBlock from "./PathBlock";
import "./RacePath.css";

function RacePath({result1,result2,clickRoll}){

    const PathLength =15;

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
        alert("Player 2 won");
    }
    else if (circlePosition === PathLength - 1){
        alert("Player 1 won")
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