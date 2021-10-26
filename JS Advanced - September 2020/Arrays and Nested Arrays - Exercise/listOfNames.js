function solve(arr){
    let start=1;
    arr.sort();
    arr.forEach(element => {
        console.log(`${start}.${element}`);
        start++;
    });
}

solve(["John", "Bob", "Christina", "Ema"]);