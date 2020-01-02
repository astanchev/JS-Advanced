function solve(input) {
    let flatArr = input.flat();

    return Math.max(...flatArr);
}

console.log(solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
    ]));