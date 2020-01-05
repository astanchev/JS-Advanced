function solve(data, order) {
    return order === 'desc' ?
            data.sort((a, b) => b - a) :
            data.sort((a, b) => a - b);
}