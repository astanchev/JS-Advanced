function solve(input) {
    let catalogue = {};

    for (const line of input) {
        let [product, price] = line.split(' : ');
        price = +price;
        let firstLetter = product[0];

        if (!catalogue.hasOwnProperty(firstLetter)) {
            catalogue[firstLetter] = {};
        }

        catalogue[firstLetter][product] = price;
    }

    let orderedLetters = Object.keys(catalogue)
        .sort((a, b) => a.localeCompare(b));
    for (const letter of orderedLetters) {
        console.log(letter);
        for (const product of Object
                                .keys(catalogue[letter])
                                .sort((a, b) => a.localeCompare(b))) {
            console.log(`  ${product}: ${catalogue[letter][product]}`);
        }
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);