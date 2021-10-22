function solve(input) {
    let biggestNum = Number.NEGATIVE_INFINITY;

    input.foreach(
        row => row.foreach(
            col => biggestsNum = Math.max(biggestNum, col)));

    console.log(biggestNum);
    return biggestNum;

}

// function solve(matrix) {
//     let biggestNum = Number.NEGATIVE_INFINITY;

//     for (let row = 0; row < matrix.length; row++) {
//         let currentRow = matrix[row];
//         for (let col = 0; col < currentRow.length; col++) {
//             let currentElement = currentRow[col];
//             if (currentElement > biggestNum) {
//                 biggestNum = currentElement;
//             }
//         }
//     }

//     return biggestNum;
// }

solve([[20, 50, 10],
[8, 33, 145]]);