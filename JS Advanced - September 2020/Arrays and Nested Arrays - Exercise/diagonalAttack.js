function solve(input) {

    let row = 0;
    let col = 0;
    let sumOfMainDiagonal = 0;
    let sumOfSecondaryDiagonal = 0;
    let diagonalsCoordinates = [];
    let inputParsed = [[]];

    parseInput();

    for (let index = 0; index < inputParsed.length; index++) {
        sumOfMainDiagonal += Number(inputParsed[row][col]);
        diagonalsCoordinates.push(String(row) + String(col));
        col++;
        row++;
    }

    col = input.length - 1;
    row = 0;
    for (let index = 0; index < inputParsed.length; index++) {
        sumOfSecondaryDiagonal += Number(inputParsed[row][col]);
        diagonalsCoordinates.push(String(row) + String(col));
        col--;
        row++;
    }

    if (sumOfMainDiagonal === sumOfSecondaryDiagonal) {
        for (let row = 0; row < inputParsed.length; row++) {
            for (let col = 0; col < inputParsed.length; col++) {
                if (!isInDiagonal(row, col)) {
                    inputParsed[row][col] = sumOfSecondaryDiagonal;
                }

            }
        }
    }

    printResult();

    function isInDiagonal(r, c) {
        for (let index = 0; index < diagonalsCoordinates.length; index++) {
            let coordinates = diagonalsCoordinates[index];
            let diagonalRow = Number(coordinates[0]);
            let diagonalCol = Number(coordinates[1]);
            if (r === diagonalRow && c === diagonalCol) {
                return true;
            }
        }

        return false;
    }

    function printResult() {
        inputParsed.forEach(r => {
            console.log(r.join(' '));
        });
    }

    function parseInput() {
        let currentArr=[];
       for (let r = 0; r < input.length; r++) {
           let inputRow = input[r].split(' ');
            for (let c = 0; c < inputRow.length; c++) {
               currentArr.push(Number(inputRow[c]));
            }
           inputParsed[r]=currentArr;
           currentArr=[];
       }
    }
}

solve(['1 1 1',
'1 1 1',
'1 1 0']
);

solve(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']
);