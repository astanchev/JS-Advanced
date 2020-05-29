function solve(input) {
    let result = new Map();

    for (const row of input) {
        let [town, product, price] = row.split(' | ');

        if (!result.get(product)) {
            result.set(product, new Map());
        }

        result.get(product).set(town, +price);
    }

    for (const product of result) {
        let lowestPriceTown = [...product[1]].sort((a, b) => a[1] - b[1])[0];
        console.log(`${product[0]} -> ${lowestPriceTown[1]} (${lowestPriceTown[0]})`);
    }
}

// solve(['Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10']
// );

//console.log();

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999']
);

// console.log();

// solve(['Sofia City | Audi | 100000',
//     'Sofia City | BMW | 100000',
//     'Sofia City | Mitsubishi | 10000',
//     'Sofia City | Mercedes | 10000',
//     'Sofia City | NoOffenseToCarLovers | 0',
//     'Mexico City | Audi | 1000',
//     'Mexico City | BMW | 99999',
//     'New York City | Mitsubishi | 10000',
//     'New York City | Mitsubishi | 1000',
//     'Mexico City | Audi | 100000',
//     'Washington City | Mercedes | 1000']
// );