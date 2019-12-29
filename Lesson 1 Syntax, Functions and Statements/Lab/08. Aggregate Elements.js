function solve(params) {
    let sum = params.reduce((a, b) => a + (+b), 0);
    let invSum = params.reduce((a, b) => a + 1 / (+b), 0);
    let con = params.reduce((a, b) => a.concat(b), '');

    console.log(sum);
    console.log(invSum);
    console.log(con);
}

solve([1, 2, 3]);

function solve2(numbers) {
    const sum = (a, b) => a + b;
    const inverseSum = (a, b) => a + 1 / b;
    const stringConcat = (a, b) => a.concat(b);
    const operations = [
        [sum, 0],
        [inverseSum, 0],
        [stringConcat, ""]
    ];

    return operations.map(
        x => numbers.reduce(...x)
    );
}

console.log(
    solve2([1, 2, 3]).join("\n")
);
console.log(
    solve2([2, 4, 8, 16]).join("\n")
);