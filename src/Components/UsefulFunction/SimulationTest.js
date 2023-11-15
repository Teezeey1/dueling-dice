function SimulationTest(dice1, dice2, pathLength, ilternation){
    let result1 = 0;
    let result2 = 0;
    let midpoint = Math.floor(pathLength/2);
    for(let i = 0; i < ilternation;  ++i){
        while(midpoint!== 0 || midpoint!== pathLength - 1){
            let cal1 = dice1[Math.floor(Math.random()*(dice1.length))];
            let cal2 = dice2[Math.floor(Math.random()*(dice2.length))];
            if(cal1>cal2){
                midpoint++;
            }
            else if (cal1<cal2){
                midpoint--;
            }
        }
        if(midpoint===0){
            result2++;
        }
        else{
            result1++;
        }
        midpoint = Math.floor(pathLength/2);
    }
    return [result1,result2];
}

export default SimulationTest;