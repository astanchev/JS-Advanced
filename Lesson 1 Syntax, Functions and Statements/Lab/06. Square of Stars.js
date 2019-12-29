function solve(x = 5) {
    let result = [];

    for (let i = 0; i < x; i++) {
        result[i] = '*'.repeat(x).split('').join(' ');     
    }

    console.log(result.join('\n'));
}

solve();