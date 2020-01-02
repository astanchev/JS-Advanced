function solve(input) {
    let matrix = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let playerIndex = 0;

    for (let i = 0; i < input.length; i++, playerIndex++) {

        let [row, col] = input[i].split(' ');
        row = +row;
        col = +col;
        let sign = playerIndex % 2 === 0 ? 'X' : 'O';

        if (matrix[row][col] !== false) {

            console.log('This place is already taken. Please choose another!');
            playerIndex--;
            continue;
        }

        matrix[row][col] = sign;

        if (checkRows(sign) ||
            checkCols(sign) ||
            checkDiagonals(sign)) {

            console.log(`Player ${sign} wins!`); 
            break;
        }

        if (checkIfMatrixIsFilled()) {
            console.log('The game ended! Nobody wins :(');
            break;
        }
    }

    return matrix.map(row => row.join('\t')).join('\n');

    function checkRows(sign) {
        for (const row of matrix) {

            if (row.every(x => x === sign)) {
                return true;
            }
        }

        return false;
    }

    function checkCols(sign) {
        for (let i = 0; i < 3; i++) {
            let col = matrix.map((value, index) => value[i]);

            if (col.every(x => x === sign)) {
                return true;
            }
        }

        return false;
    }

    function checkDiagonals(sign) {
        for (let i = 0; i < 3; i++) {

            const primaryDiagonal = matrix
                .map((e, i) => e[i]);

            const secondaryDiagonal = matrix
                .map((e, i) => {
                    let index = matrix.length - i - 1;
                    return e[index];
                });

            if (primaryDiagonal.every(x => x === sign) ||
                secondaryDiagonal.every(x => x === sign) ) {

                return true;
            }
        }

        return false;
    }

    function checkIfMatrixIsFilled() {
        return matrix.flat().every(x => x !== false);
    }

}

// console.log(solve([
//     "0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"
// ]));

// console.log();

console.log(solve([
                    "0 0",
                    "0 0",
                    "1 1",
                    "0 1",
                    "1 2",
                    "0 2",
                    "2 2",
                    "1 2",
                    "2 2",
                    "2 1"
                ]));

// console.log();

// console.log(solve([
//                     "0 1",
//                     "0 0",
//                     "0 2",
//                     "2 0",
//                     "1 0",
//                     "1 2",
//                     "1 1",
//                     "2 1",
//                     "2 2",
//                     "0 0"
//                   ]));
