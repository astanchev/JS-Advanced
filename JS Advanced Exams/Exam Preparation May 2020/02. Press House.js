function pressHouse() {
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            const result = [
                `Title: ${this.title}`,
                `Content: ${this.content}`
            ];

            return result.join('\n');
        }
    }

    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            if (content.length >= 150) {
                throw new Error('Short reports content should be less then 150 symbols.');
            }
            super(title, content);
            this.originalResearch = originalResearch;
            this.comments = [];
        }

        get originalResearch() {
            return this._originalResearch;
        }

        set originalResearch(value) {
            if (!value.title || !value.author) {
                throw new Error('The original research should have author and title.');
            }

            this._originalResearch = value;
        }

        addComment(comment) {
            this.comments.push(comment);

            return 'The comment is added.';
        }

        toString() {
            const result = [
                `Original Research: ${this.originalResearch.title} by ${this.originalResearch.author}`                
            ];

            if (this.comments.length > 0) {
                result.push(`Comments:`);
                this.comments.forEach(c => result.push(c));
            }

            return super.toString() + `\n` + result.join('\n');
        }
    }

    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = [];
        }

        addClient(clientName, orderDescription) {
            if (this.clients.some(c => c.clientName === clientName && c.orderDescription === orderDescription)) {
                throw new Error('This client has already ordered this review.');
            }

            this.clients.push({
                clientName,
                orderDescription
            });

            return `${clientName} has ordered a review for ${this.book.name}`;
        }

        toString() {
            const result = [
                `Book: ${this.book.name}`
            ];

            if (this.clients.length > 0) {
                result.push(`Orders:`);
                this.clients.forEach(c => result.push(`${c.clientName} - ${c.orderDescription}`));
            }
            
            return super.toString() + `\n` + result.join('\n');
        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    };
}

let classes = pressHouse();
let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString());
//------------------------------
let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", {
    title: "Dragon 2",
    author: "wikipedia.org"
});
console.log(short.addComment("Thank god they didn't use java."))
short.addComment("In the end JavaScript's features are executed in C++ — the underlying language.");
console.log(short.toString());
//------------------------------
let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", {
    name: "The Great Gatsby",
    author: "F Scott Fitzgerald"
});
console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString());

// Title: Lorem
// Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel, ultricies est. Phasellus id pellentesque risus. Morbi aliquet at lectus ac malesuada. Morbi eu erat orci. Donec id turpis elit. Donec iaculis sapien odio, sit amet cursus lacus rutrum sit amet. Cras ac urna sapien. Pellentesque porta mauris ac dolor commodo, congue condimentum orci varius. Ut ultrices pretium commodo. Aenean facilisis mattis facilisis.
// ----------------------
// The comment is added.
// Title: SpaceX and Javascript
// Content: Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?
// Original Research: Dragon 2 by wikipedia.org
// Comments:
// Thank god they didn't use java.
// In the end JavaScript's features are executed in C++ — the underlying language.
// ----------------------
// The Guardian has ordered a review for The Great Gatsby
// Goodreads has ordered a review for The Great Gatsby
// Title: The Great Gatsby is so much more than a love story
// Content: The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...
// Book: The Great Gatsby
// Orders:
// The Guardian - 100 symbols
// Goodreads - 30 symbols