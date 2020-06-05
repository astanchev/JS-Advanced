function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');
    const result = document.getElementById('result');

    const rows = [...document.querySelectorAll('tbody > tr > td:last-child')];

    const inputEmail = input.value;
    const row = rows.find(x => x.textContent === inputEmail);

    if (row) {
        row.parentElement.remove();
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }

    input.value = '';
}