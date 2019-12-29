function solve([x1, y1, x2, y2]) {

    const comparisons = function ([x1, y1, x2, y2]) {
        const [x, y] = [x1 - x2, y1 - y2];
        const distance = Math.sqrt(x ** 2 + y ** 2);
        const isValid = Number.isInteger(distance) ? 'valid' : 'invalid';
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid}`);
    };

    comparisons([x1, y1, 0, 0]);
    comparisons([x2, y2, 0, 0]);
    comparisons([x1, y1, x2, y2]);
}

solve([2, 1, 1, 1]);