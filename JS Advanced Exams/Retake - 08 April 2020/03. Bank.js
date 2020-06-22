class Bank {
    constructor (bankName){
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer ({firstName, lastName, personalId}){
        if (this.allCustomers.some(c => c.personalId === personalId)) {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }

        this.allCustomers.push({
            firstName, 
            lastName, 
            personalId, 
            totalMoney: 0,
            transactions: []
        });

        return {firstName, lastName, personalId};
    }

    depositMoney (personalId, amount) {
        const customer = this.allCustomers.find(c => c.personalId === personalId);

        if (customer === undefined) {
            throw new Error(`We have no customer with this ID!`);
        }

        customer.totalMoney += amount;
        customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    withdrawMoney (personalId, amount) {
        const customer = this.allCustomers.find(c => c.personalId === personalId);

        if (customer === undefined) {
            throw new Error(`We have no customer with this ID!`);
        }

        if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.totalMoney -= amount;
        customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    customerInfo (personalId) {
        const customer = this.allCustomers.find(c => c.personalId === personalId);

        if (customer === undefined) {
            throw new Error(`We have no customer with this ID!`);
        }

        let result = `Bank name: ${this._bankName}\nCustomer name: ${customer.firstName} ${customer.lastName}\nCustomer ID: ${customer.personalId}\nTotal Money: ${customer.totalMoney}$\nTransactions:\n`;

        const transactions = [];

        for (let i = customer.transactions.length - 1; i >= 0; i--) {
            transactions.push(`${i + 1}. ` + customer.transactions[i]);
        }

        result += transactions.join('\n');

        return result.trim();
    }
}


let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

// { firstName: ‘Svetlin’, lastName: ‘Nakov’, personalId: 6233267 } 
// { firstName: ‘Mihaela’, lastName: ‘Mileva’, personalId: 4151596 }
// 500$
// 375$
// Bank name: SoftUni Bank
// Customer name: Svetlin Nakov
// Customer ID: 6233267
// Total Money: 375$
// Transactions:
// 3. Svetlin Nakov withdrew 125$!
// 2. Svetlin Nakov made depostit of 250$!
// 1. Svetlin Nakov made depostit of 250$!
