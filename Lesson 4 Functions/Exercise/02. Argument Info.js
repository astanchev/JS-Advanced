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

solve('cat', 42, function () { console.log('Hello world!'); });
console.log();
solve({ name: 'bob'}, 3.333, 9.999);
console.log();
solve(42, 'cat', [], undefined);
console.log();
solve(42, 15, 'cat');
console.log();
solve(42, 'cat', 15, 'kitten', 'tomcat');