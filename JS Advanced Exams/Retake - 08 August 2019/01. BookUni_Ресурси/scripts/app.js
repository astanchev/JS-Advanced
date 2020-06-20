function solve() {
    const inputTitle = document.querySelector('input[placeholder="Add Title"]');
    const inputYear = document.querySelector('input[placeholder="Add Year"]');
    const inputPrice = document.querySelector('input[placeholder="Add Price"]');
    const oldBooksShelf = document.querySelectorAll('.bookShelf')[0];
    const newBooksShelf = document.querySelectorAll('.bookShelf')[1];
    const totalTextH1 = document.getElementsByTagName('h1')[1];
    const btnAdd = document.querySelector('form > button');

    let total = 0;

    btnAdd.addEventListener('click', addBook);

    function addBook(e) {
        e.preventDefault();

        if (inputTitle.value !== '' &&
        Number(inputPrice.value) > 0 &&
        Number(inputYear.value) > 0) {
                let book = null;

            if (Number(inputYear.value) >= 2000) {
                book = createNewBook();                
                newBooksShelf.appendChild(book);
            } else {
                book = createOldBook();
                oldBooksShelf.appendChild(book);
            }
        }
    }

    function move(e) {
        e.preventDefault();

        const bookToMoveParts = Array.from(e.target.parentElement.children).slice(0, 2);
        const newPrice = 0.85 * Number(bookToMoveParts[1].textContent.match(/\d+\.?\d{2}/));
        bookToMoveParts[1].textContent = bookToMoveParts[1].textContent.replace(/\d+\.?\d{2}/, newPrice.toFixed(2));

        const oldBook = createElement('div', bookToMoveParts, { className: 'book' });
        oldBooksShelf.appendChild(oldBook);
        e.target.parentElement.remove();
    }

    function buy(e) {
        e.preventDefault();

        const price = Number(e.target.parentElement.children[1].textContent.match(/\d+\.?\d{2}/));
        total += price;
        e.target.parentElement.remove();
        totalTextH1.textContent = `Total Store Profit: ${total.toFixed(2)} BGN`;
    }

    function createNewBook() {
        const bookToReturn = createBook(Number(inputPrice.value));
        const moveBtn = createElement('button', `Move to old section`);

        moveBtn.addEventListener('click', move);
        bookToReturn.appendChild(moveBtn);

        return bookToReturn;                                                
    }

    function createOldBook() {
        return createBook(0.85 * Number(inputPrice.value));
    }

    function createBook(bookPrice) {
        const bookToCreate = createElement('div',
                                    createElement('p', `${inputTitle.value} [${inputYear.value}]`), 
                                    { className: 'book' });
        const buyBtn = createElement('button', `Buy it only for ${bookPrice.toFixed(2)} BGN`);
                                    
        buyBtn.addEventListener('click', buy);
        bookToCreate.appendChild(buyBtn);

        return bookToCreate;
    }

    function createElement(type, content, attributes) {
        const result = document.createElement(type);

        if (attributes !== undefined) {
            Object.assign(result, attributes);
        }

        if (Array.isArray(content)) {
            content.forEach(append);
        } else {
            append(content);
        }

        function append(node) {
            if (typeof node === 'string') {
                node = document.createTextNode(node);
            }

            result.appendChild(node);
        }

        return result;
    }
}