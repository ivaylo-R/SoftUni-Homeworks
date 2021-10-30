function solve(rows, cols) {
    let matrix = [];
    let stopLoopingNumber = rows * cols;
    let row = 0;
    let col = 0;
    let startPoint = 0;
    let horizontal = true;
    let up = false;
    let left = false;

    defaultMatrix();
    while (matrix[row][col] !== stopLoopingNumber) {
        matrix[row][col] = startPoint + 1;
        isNeededToChangeTheDirection(row, col);

        if (horizontal) {
            if (col === cols - 1) {
                row++;
                horizontal = false;
                startPoint++;
                continue;
            }
            if (left === false) {
                col++;
            }
            else {
                if (col !== 0) col--;
            }
        } else {
            if (row === rows - 1) {
                col--;
                horizontal = true;
                startPoint++;
                continue;
            }
            if (up == false) {
                row++;
            } else {
                row--;
            }

        }

        startPoint++;
    }

    printMatrix();

    function isNeededToChangeTheDirection(x, y) {
        if (x === 0 && y === cols - 1) {
            up = false;
        }
        if (x === rows - 1 && y === cols - 1) {
            left = true;
        }
        if (x === rows - 1 && y === 0) {
            up = true;
        }
    }

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

solve(3, 3);