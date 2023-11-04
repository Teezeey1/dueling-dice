import PathBlock from "./PathBlock";
import "./RacePath.css";

function RacePath(){

    const num = 6;

    const Array = [];
    for(let i = 0; i < num;++i){
        Array[i] = i + 1
    }

    const pathBlock = Array.map((number)=><PathBlock numberOfBlock={number} key={number}></PathBlock>);

    return(
        <div className="racePath">
            {pathBlock}
        </div>
    );
}

export default RacePath;