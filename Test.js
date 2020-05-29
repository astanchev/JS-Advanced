function solve(input) {
    const result = new Map();
    const juices = {};

    for (const line of input) {
        let [juice, quantity] = line.split(' => ');
        quantity = +quantity;

        if (!juices.hasOwnProperty(juice)) {
            juices[juice] = 0;
        }

        juices[juice] += quantity;

        let bottles = Math.floor(juices[juice] / 1000);

        if (bottles > 0) {
            if (!result.has(juice)) {
                result.set(juice, 0);
            }

            result.set(juice, result.get(juice) + bottles);
            juices[juice] -= bottles * 1000;
        }
    }

    for (const juice of result) {
        console.log(`${juice[0]} => ${juice[1]}`);
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