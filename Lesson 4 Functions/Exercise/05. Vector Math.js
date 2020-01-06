const solution = (function () {

    const add = function () {
        const [[xA, yA], [xB, yB]] = arguments;
        return [xA + xB, yA + yB];
    };

    const multiply = function () {
        const [[xA, yA], scalar] = arguments;
        return [xA * scalar, yA * scalar];
    };

    const length = function () {
        const [[xA, yA]] = arguments;
        return Math.sqrt(xA ** 2 + yA ** 2);
    };

    const dot = function () {
        const [[xA, yA], [xB, yB]] = arguments;
        return xA * xB + yA * yB;
    };

    const cross = function () {
        const [[xA, yA], [xB, yB]] = arguments;
        return xA * yB - yA * xB;
    };

    return { add, multiply, length, dot, cross };
})();

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.length([3, -4]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));
