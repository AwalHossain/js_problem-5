//-------------------------Problem-1 --------------------------------------

function  seerToMon(seer){

    //  Here is the condition for convert seer to mon
    //if seer is less than zero, then it will show a error result
    if(seer <0){
        return "Please input a valid and positive number"
    }
    // if seer is only then it will perfectly, otherwise it will show a error messagge
   else if(typeof seer == 'number'){
        const mon = seer/40;
        return mon;
    }
    else{
        return "Sorry input a number not string"
    }

}

const inputSeer = seerToMon(220);
console.log( inputSeer);

