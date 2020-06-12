function solution() {
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
            order: ['carbohydrate', 'flavour']
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
            order: ['carbohydrate', 'flavour']
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
            order: ['carbohydrate', 'fat', 'flavour']
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
            order: ['protein', 'fat', 'flavour']
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
            order: ['protein', 'carbohydrate', 'fat', 'flavour']
        }
    };

    const microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    const opertaions = {
        restock,
        prepare,
        report
    };

    function restock(element, qty) {
        microelements[element] += qty;
        return 'Success';
    }

    function prepare(recipe, qty) {
        const required = Object.assign({}, recipes[recipe]); //Make copy of the recipe with needed quantity
        required.order.forEach(key => required[key] *= qty); //to check if it is available

        for (let element of required.order) {
            if (microelements[element] < required[element]) {
                return `Error: not enough ${element} in stock`;
            }
        }

        required.order.forEach(key => microelements[key] -= required[key]);

        return 'Success';
    }

    function report() {
        return `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavour}`;
    }

    function manager(command) {
        const tokens = command.split(' ');
        return opertaions[tokens[0]](tokens[1], Number(tokens[2]));
    }

    return manager;
}


let manager = solution();

console.log(manager('restock protein 100', 'Success'));
console.log(manager('restock carbohydrate 100', 'Success'));
console.log(manager('restock fat 100', 'Success'));
console.log(manager('restock flavour 100', 'Success'));
console.log(manager('report', 'protein=100 carbohydrate=100 fat=100 flavour=100'));
console.log(manager('prepare apple 2', 'Success'));
console.log(manager('report', 'protein=100 carbohydrate=98 fat=100 flavour=96'));
console.log(manager('prepare apple 1', 'Success'));
console.log(manager('report', 'protein=100 carbohydrate=97 fat=100 flavour=94'));