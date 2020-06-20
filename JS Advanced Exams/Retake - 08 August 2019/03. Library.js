class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: libraryName.length,
            special: libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        };
    }

    subscribe(name, type) {
        if (!this.subscriptionTypes.hasOwnProperty(type)) {
            throw new Error (`The type ${type} is invalid`);
        }

        let subscriber = this.subscribers.find(s => s.name === name);

        if (subscriber === undefined) {
            subscriber = {
                name,
                type,
                books: []
            };
            this.subscribers.push(subscriber);
        } else {
            subscriber.type = type;
        }        

        return subscriber;
    }

    unsubscribe(name) {
        const indexOfSubscriber = this.subscribers.findIndex(s => s.name === name);

        if (indexOfSubscriber < 0) {
            throw new Error (`There is no such subscriber as ${name}`);
        } else {
            this.subscribers.splice(indexOfSubscriber, 1);
        }

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let subscriber = this.subscribers.find(s => s.name === subscriberName);

        if (subscriber === undefined) {
            throw new Error (`There is no such subscriber as ${subscriberName}`);
        }

        const maxAllowedBooks = this.subscriptionTypes[subscriber.type];

        if (maxAllowedBooks === subscriber.books.length) {
            throw new Error (`You have reached your subscription limit ${maxAllowedBooks}!`);
        }

        subscriber.books.push({
            title: bookTitle,
            author: bookAuthor
        });

        return subscriber;
    }

    showInfo () {
        if (this.subscribers.length === 0) {
            return `${this.libraryName} has no information about any subscribers`;
        }

        let result = '';

        for (const subscriber of this.subscribers) {
            result += `Subscriber: ${subscriber.name}, Type: ${subscriber.type}\nReceived books: `;
            const subBooks = subscriber.books.map(b => `${b.title} by ${b.author}`);
            result += subBooks.join(', ') + '\n';            
        }

        return result;
    }
}

let lib = new Library('L');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');
lib.subscribe('Josh','vip');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');
lib.receiveBook('Josh', 'Graf Monte Cristo', 'Alexandre Dumas');
lib.receiveBook('Josh','Cromwell','Victor Hugo');
lib.receiveBook('Josh','Marie Tudor','Victor Hugo');
lib.receiveBook('Josh','Bug-Jargal','Victor Hugo');
lib.receiveBook('Josh','Les Orientales','Victor Hugo');
lib.receiveBook('Josh','Marion de Lorme','Victor Hugo');

lib.unsubscribe('John');

lib.showInfo();

// lib.subscribe('Peter', 'normal');
// lib.subscribe('John', 'special');

// lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
// lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
// lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

// console.log(lib.showInfo());

// // Subscriber: Peter, Type: normal
// // Received books: Lord of the rings by J. R. R. Tolkien
// // Subscriber: John, Type: special
// // Received books: A Song of Ice and Fire by George R. R. Martin, Harry Potter by 
// // J. K. Rowling