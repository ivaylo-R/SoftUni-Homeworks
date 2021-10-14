function solve(arr){
    let arrSum=0;

    for (let index = 0; index < arr.length; index++) {
        arrSum += arr[index];
    }

    let inverseValuesSum = 0;

    for (let index = 0; index < arr.length; index++) {
        inverseValuesSum+=1/arr[index];
    }
    
    console.log(arrSum);
    console.log(inverseValuesSum.toFixed(4));
    console.log(arr.join(''));
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);