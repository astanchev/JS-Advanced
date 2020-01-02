function solve(input) {
    return input
    .filter((x, i) => i % 2 == 0)
    .join(' ');
}

console.log(solve(['20', '30', '40']));