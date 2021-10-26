function solve(arr){
    let repeat=arr.length/2;
    arr.sort((a,b)=>a-b);
    let result=[];
    for (let index = 0; index < repeat; index++) {
        let smallest=arr.shift();
        let biggest=arr.pop();
        result.push(smallest);
        result.push(biggest);
    }

    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);