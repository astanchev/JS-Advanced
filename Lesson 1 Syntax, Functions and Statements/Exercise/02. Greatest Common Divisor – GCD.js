function solve(a, b) {
    let min = Math.min(a, b);
    let max = 1;

    for (let i = 1; i <= min; i++) {
        if (a % i === 0 && b % i === 0) {
            max = i;
        }
    }

    console.log(max);
}

solve(2154, 458);

function solve2(x, y) {
    while (y) {
        let temp = y;
        y = x % y;
        x = temp;
    }

    console.log(x);
}

solve2(2154, 458);