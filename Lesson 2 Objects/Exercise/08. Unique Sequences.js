function solve(input) {
    let colectionSet = input
        .reduce((accSet, element) => {
            let arr = JSON.parse(element).sort((a, b) => b - a);
            let str = JSON.stringify(arr);
            accSet.add(str);
            return accSet;
        }, new Set());

    Array.from(colectionSet)
        .map((x) => JSON.parse(x))
        .sort((a, b) => a.length - b.length)
        .forEach((x) => console.log(`[${x.join(', ')}]`));
}

function solve2(input) {
    let set = new Set();

    for (const line of input) {
        const orderedLine = JSON.parse(line).sort((a, b) => b - a);

        set.add(JSON.stringify(orderedLine));
    }

    let result = Array.from(set);

    result
        .map((x) => JSON.parse(x))
        .sort((a, b) => a.length - b.length)
        .forEach((x) => console.log(`[${x.join(', ')}]`));
}

solve([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);