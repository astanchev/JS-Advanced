class CheckingAccount {
    _clientId;
    _email;
    _firstName;
    _lastName;

    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        if (typeof value === 'string' && value.length !== 6) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        this._clientId = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        if (!/\w+@[A-Za-z\.]+/.test(value)) {
            throw new TypeError('Invalid e-mail');
        }

        this._email = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this.validateName(value, 'First');

        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this.validateName(value, 'Last');

        this._lastName = value;
    }

    validateName(value, name) {
        if (value.length < 3 || value.length > 20) {
            throw new TypeError(`${name} name must be between 3 and 20 characters long`);
        }
        if (!/^[A-Za-z]+$/.test(value)) {
            throw new TypeError(`${name} name must contain only Latin characters`);
        }
    }
}

let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov')

let acc1 = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov')

let acc2 = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')

let acc3 = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')