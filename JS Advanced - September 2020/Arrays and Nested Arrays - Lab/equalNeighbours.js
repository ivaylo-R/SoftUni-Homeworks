function solve(matrix) {
    let count = 0;
    let rowLength = matrix.length;
    let colLength = matrix[0].length;

    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {
            let currentEl = matrix[row][col];

            if (checkNeighborPairs(row, col, currentEl)) count++;
        }
    }

    function checkNeighborPairs(row, col, currentEl) {
        //Up
        if (isInBordersOfMatrix(row - 1, col)) {
            let up = matrix[row - 1][col];
            if (isEqual(currentEl, up)) return true;
        }

        //down
        if (isInBordersOfMatrix(row + 1, col)) {
            let down = matrix[row + 1][col];

            if (isEqual(currentEl, down)) return true;
        }

        //left
        if (isInBordersOfMatrix(row, col - 1)) {
            let left = matrix[row][col - 1];
            
            if (isEqual(currentEl, left)) return true;
        }

        //right
        if (isInBordersOfMatrix(row, col + 1)) {
            let right = matrix[row][col + 1];

            if (isEqual(currentEl, right)) return true;
        }

        return false;
    }


    function isEqual(x, y) {
        return x === y;
    }

    function isInBordersOfMatrix(row, col) {
        if (row < 0 || row >= rowLength || col < 0 || col >= colLength) return false;
        return true;
    }

    console.log(count);
}



solve([['2', '2', '5', '7', '4'],
        ['4', '0', '5', '3', '4'],
        ['2', '5', '5', '4', '2']]);

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])

solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);