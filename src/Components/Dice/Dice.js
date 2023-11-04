import "./Dice.css";

function Dice(){

    const num = 1;

    return(
        <div className = "dice" value = {num}>
            <h3>{num}</h3>
        </div>
    );
}

export default Dice;