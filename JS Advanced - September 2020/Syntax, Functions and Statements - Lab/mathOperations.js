function solve(x,y, operator){
    let result;
    switch(operator){
        case '+': result=x+y; break;
        case '-': result=x -y; break;
        case '*': result=x*y; break;
        case '/': result=x/y; break;
        case '%': result=x%y; break;
        case '**': result=x**y; break;
    }

    console.log(result);
}

solve(3, 5.5, '*');