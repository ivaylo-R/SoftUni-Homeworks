function solve(input) {

    input.sort((a,b)=>
    {
        if(a.length>b.length) return 1;
        if(a.length<b.length) return -1;
        if(a>b) return 1;
        if(a<b) return -1;
    });

    input.forEach(element => {
        console.log(element);
    });
}

solve(
    ['alpha', 
'beta', 
'gamma']
);

solve(
    ['Isacc',
        'Theodor',
        'Jack',
        'Harrison',
        'George']
);