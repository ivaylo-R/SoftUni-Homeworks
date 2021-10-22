function solve(arr) {
    let start = 0;
    if(arr.length%2===0){
        start=arr.length/2;
    }
    else{
        start=arr.length/2;
    }

    let end = arr.length-1;

    let result= arr.sort((x, y) => x - y);
    return result.slice(start,end+1);
}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);