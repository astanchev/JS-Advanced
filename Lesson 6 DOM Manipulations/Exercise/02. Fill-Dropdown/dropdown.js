function addItem() {
    const addText = document.getElementById('newItemText');
    const addValue = document.getElementById('newItemValue');

    const option = document.createElement('option');
    [option.textContent, option.value] = [addText.value, addValue.value];

    document.getElementById('menu').appendChild(option);
    [addText.value, addValue.value] = ['', ''];
}