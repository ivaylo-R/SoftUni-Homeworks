function solve(x1,y1,x2,y2){
    const defaultValue=0;

    function calculateDistanc(x1,y1,x2,y2){
        let distanceBetweenTwoPoints= Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));

        if(!Number.isInteger(distanceBetweenTwoPoints)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
        else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }
    }

    function firstOperation(){
        calculateDistanc(x1,y1,defaultValue,defaultValue);
    }
    
    function secondOperation(){
        calculateDistanc(x2,y2,defaultValue,defaultValue);
    }

    function thirdOperation(){
        calculateDistanc(x1,y1,x2,y2);
    }

    firstOperation();
    secondOperation();
    thirdOperation();
    
}

solve(3, 0, 0, 4);