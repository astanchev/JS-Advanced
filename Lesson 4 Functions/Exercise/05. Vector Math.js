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

const solution2 = (function () {
    return {
        add: (vec1, vec2) => [vec1[0] + vec2[0], vec1[1] + vec2[1]],
        multiply: (vec1, scalar) => [vec1[0] * scalar, vec1[1] * scalar],
        length: (vec1) => Math.sqrt(vec1[0] ** 2 + vec1[1] ** 2),
        dot: (vec1, vec2) => vec1[0] * vec2[0] + vec1[1] * vec2[1],
        cross: (vec1, vec2) => vec1[0] * vec2[1] - vec1[1] * vec2[0]
    };
})();

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.length([3, -4]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));
