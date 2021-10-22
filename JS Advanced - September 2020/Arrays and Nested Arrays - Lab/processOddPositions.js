function solve(input){
    return input.filter((x,i)=> i%2==1).map(x=>x*=2).reverse();
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);