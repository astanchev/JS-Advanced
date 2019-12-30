function solve(input) {
    let result = {};

    for (const line of input) {
        let [town, population] = line.split(' <-> ');
        addPropIfMissing(result, town);
        result[town] += +population;
    }

    for (const key of Object.keys(result)) {
        console.log(`${key} : ${result[key]}`);
    }

    function addPropIfMissing(obj, prop){
        if (!obj.hasOwnProperty(prop)) {
            obj[prop] = 0;
        }

        return obj;
    }
}

solve([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
    ]);