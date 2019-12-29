function solve(a, b) {
    let sum = 0;

    for (let i = +a; i <= +b; i++) {
        sum += i;
    }

    console.log(sum);
}

solve('-8', '20');