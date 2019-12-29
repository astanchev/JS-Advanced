function solve(input) {
    const operations = {
        'chop': x => x/2,
        'dice': x => Math.sqrt(x),
        'spice': x => x+1,
        'bake': x => x*3,
        'fillet': x => x*0.8
    };

    let num = +input.shift();

    for (const op of input) {
        num = operations[op](num);
        console.log(num);
    }
}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);