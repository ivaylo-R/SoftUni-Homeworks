function solve(input) {
    let field = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let playerX = 'X';
    let playerO = 'O';
    let playerXWinCombination = playerX.repeat(3);
    let playerOWinCombination = playerO.repeat(3);
    let isPlaceTaken = false;
    let currentPlayer = '';
    let output = [];
    let playerCounter = 0;
    let winnerExist = false;

    for (let i = 0; i < input.length; i++) {
        if (!isPlaceTaken) {
            currentPlayer = playerCounter % 2 == 0 ? playerX : playerO;
        }
        let x = String(input[i]).split(' ')[0];
        let y = String(input[i]).split(' ')[1];
        if (isInBorders(x, y)) {
            if (!isPlaceFree(x, y)) {
                output.push("This place is already taken. Please choose another!");
                isPlaceTaken = true;
                playerCounter++;
            } else {
                field[x][y] = currentPlayer;
                isPlaceTaken = false;
            }
        }

        if (i > 1) {
            if (isAlreadyWinner()) {
                printOutput();
                return;
            }
        }

        playerCounter++;
    }

    if (!winnerExist) output.push("The game ended! Nobody wins :(");
    printOutput();

    function printOutput() {

        if (output !== undefined || output !== null) output.forEach(element => {
            console.log(element);
        })
        field.forEach(element => {
            console.log(element.join('\t'));
        });
    }

    function isInBorders(x, y) {
        return x > 0 || x < field.length || y > 0 || y < field.length;
    }

    function isPlaceFree(x, y) {
        return field[x][y] === false;
    }

    function isAlreadyWinner() {
        if (checkHorizontals(field)) return true;
        if (checkVerticals()) return true;
        if (checkDiagonals()) return true;

        return false;
    }

    function checkHorizontals(matrix) {
        for (let index = 0; index < matrix.length; index++) {
            if (playerXWinCombination === matrix[index].reduce((a, x) => a + x)) {
                weHaveAWinner(playerX);
                return true;
            }
            if (playerOWinCombination === matrix[index].reduce((a, x) => a + x)) {
                weHaveAWinner(playerO);
                return true;
            }
        }

        return false;
    }

    function checkVerticals() {

        let result = rotate(field);
        checkHorizontals(result);
    }

    function checkDiagonals() {
        let row = 0;
        let col = 0;
        let mainDiagonal = [];
        let secondDiagonal = [];
        for (let index = 0; index < field.length; index++) {
            mainDiagonal.push(field[row][col]);
            col++;
            row++;
        }

        col = field.length - 1;
        row = 0;
        for (let index = 0; index < field.length; index++) {
            secondDiagonal.push(field[row][col]);
            col--;
            row++;
        }

        if (playerXWinCombination === mainDiagonal.reduce((a, b) => a + b)
            || playerXWinCombination === secondDiagonal.reduce((a, b) => a + b)) {
            weHaveAWinner(playerX);
            return true;
        }
        if (playerOWinCombination === mainDiagonal.reduce((a, b) => a + b)
            || playerOWinCombination === secondDiagonal.reduce((a, b) => a + b)) {
            weHaveAWinner(playerO);
            return true;
        }

        return false;
    }

    function rotate(array) {
        return array[0].map((x, i) => array.map(x => x[i]))
    }

    function weHaveAWinner(winner) {
        output.push(`Player ${winner} wins!`);
        winnerExist = true;
    }

}

solve(
    ["0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 2",
        "1 1",
        "2 1",
        "2 2",
        "0 0"]);

solve(
    ["0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 1",
        "1 2",
        "2 2",
        "2 1",
        "0 0"]
);
