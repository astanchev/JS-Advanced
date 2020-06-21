function solution() {
    const sections = document.getElementsByTagName('section');
    const ulList = sections[1].getElementsByTagName('ul')[0];
    const ulSent = sections[2].getElementsByTagName('ul')[0];
    const ulDiscard = sections[3].getElementsByTagName('ul')[0];

    const inputName = sections[0].getElementsByTagName('input')[0];
    const btnAdd = sections[0].getElementsByTagName('button')[0];

    btnAdd.addEventListener('click', addItem);

    function addItem(e) {
        e.preventDefault();

        const itemName = inputName.value;
        const liToAdd = createLi(itemName);

        ulList.appendChild(liToAdd);

        inputName.value = '';

        orderList();
    }

    function send(e) {
        e.preventDefault();

        const giftName = e.target.parentElement.firstChild.textContent;
        const liToSent = createElement('li', giftName, {className: 'gift'});
        ulSent.appendChild(liToSent);
        e.target.parentElement.remove();
    }

    function discard(e) {
        e.preventDefault();

        const giftName = e.target.parentElement.firstChild.textContent;
        const liToDiscard = createElement('li', giftName, {className: 'gift'});
        ulDiscard.appendChild(liToDiscard);
        e.target.parentElement.remove();
    }

    function orderList() {
        const ulToOrder = Array.from(ulList.children);
        ulToOrder.sort((l1, l2) => (l1.firstChild.textContent).localeCompare(l2.firstChild.textContent));
        ulList.innerHTML = '';
        ulToOrder.forEach(li => ulList.appendChild(li));
    }

    function createLi(itemName) {
        const li = createElement('li', itemName, {className: 'gift'});
        const btnSend = createElement('button', 'Send', {id: 'sendButton'});
        const btnDiscard = createElement('button', 'Discard', {id: 'discardButton'});

        btnSend.addEventListener('click', send);
        btnDiscard.addEventListener('click', discard);

        li.appendChild(btnSend);
        li.appendChild(btnDiscard);

        return li;
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