import { useEffect, useState } from "react";
import PathBlock from "./PathBlock";
import "./RacePath.css";

function RacePath({result1,result2}){

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
        }
        ,[result1,result2]
    );

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