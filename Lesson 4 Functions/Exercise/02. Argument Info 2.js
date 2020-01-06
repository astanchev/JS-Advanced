function solve(...input) {
    let [output, typeOfArgs] = input
    .reduce((previous, current) => {
        let [output, argumentTypes] = previous;
        let typeOfArg = typeof(current);

        output.push(`${typeOfArg}: ${current}`);

        if (!argumentTypes.hasOwnProperty(typeOfArg)) {
            argumentTypes[typeOfArg] = 0;
        }

        argumentTypes[typeOfArg]++;

        return previous;
    }, [[], {}]);

    return output.join('\n') + '\n' + Object.entries(typeOfArgs)
        .sort((a, b) => b[1] - a[1])
        .map(([type, count]) => `${type} = ${count}`)
        .join('\n');
}

console.log(solve('cat', 42, function () { console.log('Hello world!'); }));
console.log();
console.log(solve({ name: 'bob'}, 3.333, 9.999));
console.log();
console.log(solve(42, 'cat', [], undefined));
console.log();
console.log(solve(42, 15, 'cat'));
console.log();
console.log(solve(42, 'cat', 15, 'kitten', 'tomcat'));