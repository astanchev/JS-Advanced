function solve(input) {
    let juices = {};
    let bottles = new Map();

    for (const line of input) {
        let [juice, quantity] = line.split(' => ');
        addPropIfMissing(juices, juice);
        juices[juice] += +quantity;

        if (juices[juice] >= 1000) {
            let currentBottles = parseInt(juices[juice] / 1000);
            juices[juice] -= currentBottles * 1000;

            if (!bottles.has(juice)) {
                bottles.set(juice, 0);
            }

            let newBottles = bottles.get(juice) + currentBottles;
            bottles.set(juice, newBottles);
        }
    }

    for (const [juice, count] of Array.from(bottles.entries())) {
        console.log(`${juice} => ${count}`);
    }

    function addPropIfMissing(obj, prop){
        if (!obj.hasOwnProperty(prop)) {
            obj[prop] = 0;
        }
        return obj;
    }
}

solve([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
    ]);