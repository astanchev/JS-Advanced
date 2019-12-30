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
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
    ]);