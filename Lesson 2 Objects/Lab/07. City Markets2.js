function solve(input){
    var result = new Map();

    for (const line of input) {
        const [town, product, sales] = line.split(' -> ');
        const amountOfSales = +sales.split(' : ')[0];
        const priceForOneUnit = +sales.split(' : ')[1];
        const totalIncome = amountOfSales * priceForOneUnit;

        if (!result.has(town)) {
            result.set(town, new Map());
        }
            result.get(town).set(product, totalIncome);
    }

    for (const [town, townProducts] of result) {
        console.log(`Town - ${town}`);

        for (const [productName, productTotalIncome] of townProducts) {
            console.log(`$$$${productName} : ${productTotalIncome}`);
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