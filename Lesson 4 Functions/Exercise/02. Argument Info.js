function solve(...input) {
    
    let result = new Map();
    let elements = [];
    
    for (const param of input) {

        let type = typeof(param);
        addValues(type, param);     
    }

    for (const el of elements) {
        console.log(`${el.type}: ${el.param}`);
    }

    for (const prop of Array
                        .from(result.entries())
                        .sort((a, b) => b[1] - a[1])) {

        console.log(`${prop[0]} = ${prop[1]}`);
    }

    function addValues(type, param) {
        elements.push({ type, param });

        if (!result.has(type)) {
            result.set(type, 0);
        }
        
        let newValue = result.get(type) + 1;
        result.set(type, newValue);
    }
}

function solve2() {
    const result = new Map();

    const argList = [...arguments];

    for (const arg of argList) {
        const type = typeof(arg);

        console.log(`${type}: ${arg}`);

        if (!result.has(type)) {
            result.set(type, 0);
        }

        result.set(type, result.get(type) + 1);
    }

    const orderedMap = Array.from(result).sort((a, b) => b[1] - a[1]);

    orderedMap.forEach(t => console.log(`${t[0]} = ${t[1]}`));
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