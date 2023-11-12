import "./PathBlock.css";

function PathBlock({numberOfBlock,active}){

    return(
        <div className= {`block${active ? 'Active' : ''}`}>
            {numberOfBlock}
        </div>
    );
}

export default PathBlock;