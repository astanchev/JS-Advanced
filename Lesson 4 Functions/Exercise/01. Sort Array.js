function solve(data, order) {
    return order === 'desc' ?
            data.sort((a, b) => b - a) :
            data.sort((a, b) => a - b);
}

console.log(solve([14, 7, 17, 6, 8], 'desc'));