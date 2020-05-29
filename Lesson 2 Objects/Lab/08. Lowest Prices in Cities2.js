function solve(input) {
    let result = {};

    for (const key in input) {
        if (input.hasOwnProperty(key)) {
            const element = input[key];
            let [town, product, price] = element
                .split(' | ')
                .map(x => x.trim())
                .filter(x => x !== '');

            if (!result.hasOwnProperty(product)) {
                result[product] = new Map();                
            }

            result[product].set(town, +price);              
        }
    }

    for (const key of Object.keys(result)) {
        const product = key;
        const towns = [...result[product]];
        const lowestTown = towns.sort((a, b) => a[1] - b[1])[0];
        const town = lowestTown[0];
        const price = lowestTown[1];

        console.log(`${key} -> ${price} (${town})`);
    }
}

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']
);