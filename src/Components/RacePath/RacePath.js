import { useState } from "react";
import PathBlock from "./PathBlock";
import "./RacePath.css";

function RacePath({result1,result2}){

    const PathLength =15;

    //
    const [midPoint,setMidPoint] = useState(PathLength / 2);

    const path = [];
    for(let i = 0; i < PathLength;++i){
        path[i] = i;
    }

    const pathBlock = path.map((number)=><PathBlock numberOfBlock={number} key={number}></PathBlock>);

    return(
        <div className="racePath">
            {pathBlock}
        </div>
    );
}

export default RacePath;