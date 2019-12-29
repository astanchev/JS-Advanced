function solve(r) {
    let type = typeof(r);

    if (type === 'number') {
        console.log((Math.pow(r, 2)*Math.PI).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(r)}.`);
    }
}

solve('name');