function solve(squareMatrix) {
    let mainDiagonal=0;
    let secondDiagonal=0;
    
    for (let row = 0; row < squareMatrix.length; row++) {
        let currentElementInMainDiagonal = squareMatrix[row][row];
        let currentElementInSecondaryDiagonal = squareMatrix[row][squareMatrix.length-row-1];
        mainDiagonal+=currentElementInMainDiagonal;
        secondDiagonal+=currentElementInSecondaryDiagonal;
        
    }

    console.log(mainDiagonal + ' ' + secondDiagonal);
}

solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);