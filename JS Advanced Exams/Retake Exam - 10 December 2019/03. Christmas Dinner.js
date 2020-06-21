class ChristmasDinner {
    constructor(budget) {
        this.budget = Number(budget);
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }

        this._budget = value;
    }

    shopping([productType, productPrice]) {
        if (this.budget < Number(productPrice)) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(productType);
        this.budget = this.budget - Number(productPrice);

        return `You have successfully bought ${productType}!`;
    }

    recipes({recipeName, productsList}) {
        if (!productsList.every(p => this.products.includes(p))) {
            throw new Error('We do not have this product');
        }

        this.dishes.push({
            recipeName,
            productsList
        });

        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        const dishToServe = this.dishes.find(d => d.recipeName === dish);

        if (dishToServe === undefined) {
            throw new Error('We do not have this dish');
        }

        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let result = '';

        for (const key in this.guests) {
            if (this.guests.hasOwnProperty(key)) {
                const dish = this.guests[key];
                const dishProducts = this.dishes.find(d => d.recipeName === dish).productsList.join(', ');
                result += `${key} will eat ${dish}, which consists of ${dishProducts}\n`;
            }
        }

        return result.trim();
    }
}


let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

// Ivan will eat Oshav, which consists of Fruits, Honey
// Petar will eat Folded cabbage leaves filled with rice, which consists of Cabbage, Rice, Salt, Savory
// Georgi will eat Peppers filled with beans, which consists of Beans, Peppers, Salt