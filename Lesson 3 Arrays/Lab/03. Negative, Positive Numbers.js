function solve(input) {
    let result = [];
    input
        .forEach(x => x >= 0 ?
            result.push(x) :
            result.unshift(x));

    return result.join('\n');
}

console.log(solve([7, -2, 8, 9]));