function solve(input) {
    let result = {};

    for (const line of input) {
        let [town, product, salesInfo] = line.split(' -> ');
        let [amountOfSales, priceForOneUnit] = salesInfo.split(' : ');
        amountOfSales = +amountOfSales;
        priceForOneUnit = +priceForOneUnit;

        if (!result.hasOwnProperty(town)) {
            result[town] = {};
        }

        result[town][product] = amountOfSales * priceForOneUnit;
    }

    for (const key in result) {
        console.log(`Town - ${key}`);
        for (const product in result[key]) {
            console.log(`$$$${product} : ${result[key][product]}`);
        }
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