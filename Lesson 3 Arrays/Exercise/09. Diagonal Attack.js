function diagonalAttack(matrixRows) {
    let matrix = matrixRows
        .map(row => row
            .split(' ')
            .map((x) => +x));

    let [sumFirstDiagonal, sumSecondDiagonal] = [0, 0];

    for (let i = 0; i < matrix.length; i++) {
        sumFirstDiagonal += matrix[i][i];
    }

    for (let j = 0; j < matrix.length; j++) {
        sumSecondDiagonal += matrix[j][matrix.length - 1 - j];
    }

    if (sumFirstDiagonal === sumSecondDiagonal) {

        for (let i = 0; i < matrix.length; i++) {

            for (let j = 0; j < matrix.length; j++) {

                if (i !== j && i !== matrix.length - 1 - j) {
                    matrix[i][j] = sumFirstDiagonal;
                }
            }
        }
    }

    //Print Matrix
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

diagonalAttack(
    [
        '5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1'
    ]);