function Validate(params){
    let sum = 0;
        for (let i=0; i<params.length; i++){
            let num = Number(params[i]);
            if(isNaN(num)){
                alert("Please pass in all numbers separate by comma");
                return false;
            }
            sum+= num;
        }
        if(sum!== 9){
            alert("Please pass in combination that sum up to 9");
            return false;
        }
        return true;
}

export default Validate;
