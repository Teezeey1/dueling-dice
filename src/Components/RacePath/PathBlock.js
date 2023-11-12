import "./PathBlock.css";

function PathBlock({numberOfBlock}){

    return(
       <div className="oneBlock">
            <div className="oneCircle">
                {numberOfBlock}
            </div>
       </div>
    );
}

export default PathBlock;