function addItem() {
    const items = document.getElementById('items');
    items.addEventListener('click', deleteElement);

    const inputField = document.getElementById('newText');

    const liToAdd = document.createElement('li');
    const liText = document.createTextNode(`${inputField.value} `);

    const a = document.createElement('a');
    const aText = document.createTextNode('[Delete]');    
    a.appendChild(aText);
    a.setAttribute("href", "#");
    liToAdd.appendChild(liText);

    liToAdd.appendChild(a);

    items.appendChild(liToAdd);
    inputField.value = '';

    function deleteElement(e) {
        this.removeChild(e.target.parentElement);
    }    
}

function removeAll() {
    const items = document.getElementById('items');
    items.textContent = '';
}

