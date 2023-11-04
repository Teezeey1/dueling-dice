import "./PathBlock.css";

function PathBlock({numberOfBlock}){

    return(
       <div className="oneBlock">
            {numberOfBlock}
       </div>
    );
}

export default PathBlock;