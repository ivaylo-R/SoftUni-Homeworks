function solve(input) {
    let rows = input[0];
    let cols = input[1];
    let starRow = input[2];
    let starCol = input[3];

    let matrix = [];
    
    defaultMatrix();
    for(let row = 0; row< rows; row++) {
        for(let col=0; col<cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }

    printMatrix();

    function printMatrix() {
        matrix.forEach(element => {
            console.log(element.join(' '));
        });
    }

    function defaultMatrix() {
        for (let r = 0; r < rows; r++) {
            matrix[r] = Array(cols).fill(0);
        }
    }
}

solve([4, 4, 0, 0]);