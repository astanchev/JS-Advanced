function solve(input) {
    let result = input
        .filter((x, ind) => ind % 2 === 1)
        .map(x => x * 2)
        .reverse();

    return result.join(' ');
}

console.log(solve([3, 0, 10, 4, 7, 3]));