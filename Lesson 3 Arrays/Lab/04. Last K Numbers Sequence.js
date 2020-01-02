function solve(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let start = Math.max((i - k), 0);
        arr[i] = arr
            .slice(start, i)
            .reduce((a, b) => a + b, 0);
    }

    return arr.join(' ');
}

console.log(solve(6, 3));