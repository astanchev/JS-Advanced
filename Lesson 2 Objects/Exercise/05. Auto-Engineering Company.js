function solve(input) {
    let catalogue = {};

    for (const line of input) {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = +producedCars;

        if (!catalogue.hasOwnProperty(carBrand)) {
            catalogue[carBrand] = new Map();
        }

        if (!catalogue[carBrand].has(carModel)) {
            catalogue[carBrand].set(carModel, 0);
        }

        producedCars = catalogue[carBrand].get(carModel) + producedCars;

        catalogue[carBrand].set(carModel, producedCars);
    }

    for (const brand in catalogue) {
        console.log(brand);
        let models = Array.from(catalogue[brand].entries());

        for (const model of models) {
            console.log(`###${model[0]} -> ${model[1]}`);
        }
    }
}

solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
    ]);