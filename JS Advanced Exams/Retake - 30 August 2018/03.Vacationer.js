class Vacationer {
    constructor(fullName, creditCard) {
        this.fullName = fullName;
        this.creditCard = creditCard;
        this.wishList = [];
        this.idNumber = this.generateIDNumber();
    } 

    get fullName() {
        return this._fullName;
    }

    set fullName(fullName) {
        if (fullName.length !== 3) {
            throw new Error('Name must include first name, middle name and last name');
        }

        const [firstName, middleName, lastName] = fullName;
        const pattern = /^[A-Z][a-z]+$/;

        if (!firstName.match(pattern) || !middleName.match(pattern) || !lastName.match(pattern)) {
            throw new Error('Invalid full name');
        }

        this._fullName = { firstName, middleName, lastName };
    }

    get creditCard() {
        return this._creditCard;
    }

    set creditCard(creditCard) {
        this.addCreditCardInfo(creditCard);
    }

    generateIDNumber() {
        const [firstName, middleName, lastName] = Object.values(this.fullName);

        const firstNameFirstLetter = firstName.charCodeAt(0);
        const middleNameLength = middleName.length;
        const lastNameEndsWith = 'aeoiu'.includes(lastName[lastName.length - 1]) ? '8' : '7';

        return 231 * firstNameFirstLetter + 139 * middleNameLength + lastNameEndsWith;
    }

    addCreditCardInfo(creditCard) {
        if (creditCard === undefined) {
            this._creditCard = { cardNumber: 1111, expirationDate: '', securityNumber: 111 };

        } else if (creditCard.length < 3) {
            throw new Error('Missing credit card information');

        } else if (creditCard.length === 3) {
            const [cardNumber, expirationDate, securityNumber] = creditCard;

            if (typeof cardNumber !== 'number' || typeof securityNumber !== 'number') {
                throw new Error('Invalid credit card details');
            }

            this._creditCard = { cardNumber, expirationDate, securityNumber };
        }
    }

    addDestinationToWishList(destination) {
        if (this.wishList.indexOf(destination) > -1) {
            throw new Error('Destination already exists in wishlist');
        }

        this.wishList.push(destination);
        this.wishList.sort((a, b) => a.length - b.length);
    }

    getVacationerInfo() {
        const [firstName, middleName, lastName] = Object.values(this.fullName);

        const output = [`Name: ${firstName} ${middleName} ${lastName}`];
        output.push(`ID Number: ${this.idNumber}`);
        output.push('Wishlist:');
        output.push(this.wishList.length !== 0 ? `${this.wishList.join(', ')}` : 'empty');

        const [cardNumber, expirationDate, securityNumber] = Object.values(this.creditCard);
        output.push(`Credit Card:`);
        output.push(`Card Number: ${cardNumber}`);
        output.push(`Expiration Date: ${expirationDate}`);
        output.push(`Security Number: ${securityNumber}`);
        return output.join('\n');
    }
}

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
[123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());


// Error: Invalid full name

// Error: Missing credit card information

// Name: Vania Ivanova Zhivkova
// ID Number: 208398
// Wishlist:
// Bali, Spain, Germany
// Credit Card:
// Card Number: 1111
// Expiration Date:
// Security Number: 111

// Name: Tania Ivanova Zhivkova
// ID Number: 203778
// Wishlist:
// empty
// Credit Card:
// Card Number: 123456789
// Expiration Date: 10/01/2018
// Security Number: 777
