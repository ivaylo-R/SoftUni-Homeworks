function solve(n){
    const star = '* ';

    if (n === null || n === ' ' || n === 0 || n=== undefined) {
        n=5;
    }

    for (let index = 0; index < n; index++) {
       console.log(`${(star.repeat(n)).trim()}`);
    }
}

solve();