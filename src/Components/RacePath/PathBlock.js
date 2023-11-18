import "./PathBlock.css";

function PathBlock({numberOfBlock,active}){

    return(
        <div className= {`block${active ? 'Active' : ''}`}>
            {numberOfBlock + 1}
        </div>
    );
}

export default PathBlock;