function solve(arr) {
    let output = [];
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) > max) {
            output.push(arr[i]);
            max=arr[i];
        }
    }
   return output;
}


solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);