function solve(n, k) {
    let result = new Array(n);
    result[0] = 1;
    
    for (let i = 1; i < result.length; i++) {
        let currentElement=0;
        for (let y = i-1; y < k+i; y--) {
            if(y==-1){
                break;
            }

            let previousElement=result[y];
            currentElement+=previousElement;
        }
        result[i]=currentElement;
    }



    console.log(result.join(', '));
}

solve(6, 3);
solve(8, 2);



