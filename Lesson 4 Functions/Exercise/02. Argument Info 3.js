function solve() {
    const argumentsList = Array.from(arguments)
        .reduce((accObj, element) => {
            const type = typeof element;
            console.log(type + ': ' + element);

            if (!accObj[type]) {
                accObj[type] = 0;
            }

            ++accObj[type];
            return accObj;
        }, {});

    Object.entries(argumentsList)
        .sort((a, b) => b[1] - a[1])
        .forEach(([type, count]) => {
            console.log(type + ' = ' + count);
        });
}

solve('cat', 42, function () { console.log('Hello world!'); });
console.log();
solve({ name: 'bob'}, 3.333, 9.999);
console.log();
solve(42, 'cat', [], undefined);
console.log();
solve(42, 15, 'cat');
console.log();
solve(42, 'cat', 15, 'kitten', 'tomcat');