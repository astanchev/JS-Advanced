function solve(a, b, operator) {
    let mathOperations = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
        '%': (x, y) => x % y,
        '**': (x, y) => x ** y
    };

    let result = mathOperations[operator](a, b);

    console.log(result);
}

solve(5, 6, '**');

function solve2(a, b, operator) {
    let result = eval(`${a} ${operator} ${b}`);
    
    console.log(result);
}

solve2(5, 6, '**');