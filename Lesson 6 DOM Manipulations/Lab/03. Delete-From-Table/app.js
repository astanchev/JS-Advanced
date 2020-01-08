function deleteByEmail() {
    const rows = Array.from(document.getElementsByTagName('tr')).slice(1);
    const input = document.getElementsByName('email')[0];
    const inputText = input.value;
    const result = document.getElementById('result');

    const indexToDelete = rows
        .findIndex(r => r.lastElementChild.textContent === inputText);

    if (indexToDelete > -1) {
        const row = rows[indexToDelete];
        const table = row.parentElement;

        table.removeChild(row);
        result.textContent = 'Deleted';
    } else {
        result.textContent = 'Not found.';
    }
    
    input.value = '';
}