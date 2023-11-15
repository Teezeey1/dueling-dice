function SimulationTest(dice1, dice2, pathLength, ilternation){
    let outcome1 = 0;
    let outcome2 = 0;
    for(let i = 0; i < Number(ilternation);  ++i){
        let midpoint = Number(Math.floor(Number(pathLength)/2));
        let count = 0;
        while( midpoint !== 0 && midpoint !== Number(pathLength) - 1){
            if(count === 1000000){
                alert("Took too long");
                break;
            }
            let cal1 = Number(dice1[Math.floor(Math.random()*(dice1.length))]);
            let cal2 = Number(dice2[Math.floor(Math.random()*(dice2.length))]);
            if(cal1>cal2){
                midpoint+=1;
            }
            else if (cal1<cal2){
                midpoint-=1;
            }
             count++;
             console.log("midpoint value:" + midpoint + " count: " + count);
             console.log(typeof(midpoint));
        }

        if(midpoint===0){
            outcome2++;
        }
        else if (midpoint === parseInt(pathLength) - 1){
            outcome1++;
        }
        
        midpoint = Number(Math.floor(Number(pathLength)/2));
    }
    return [outcome1,outcome2];
}

export default SimulationTest;