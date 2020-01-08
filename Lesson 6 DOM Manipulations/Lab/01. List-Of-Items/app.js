function addItem() {
    const items = document.getElementById('items');
    const liToAdd = document.createElement('li');
    const inputField = document.getElementById('newItemText');

    liToAdd.textContent = inputField.value;
    items.appendChild(liToAdd);
    inputField.value = '';
}