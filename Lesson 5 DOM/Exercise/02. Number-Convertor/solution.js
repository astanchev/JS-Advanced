function solve() {
    let selectTo = document.getElementById('selectMenuTo');

    let binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    
    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal';

    selectTo.appendChild(binaryOption);
    selectTo.appendChild(hexadecimalOption);
    selectTo.firstElementChild.remove();

    let btn = document.querySelector('#container > button');

    btn.addEventListener('click', calculate);

    function calculate() {
        let number = document.getElementById('input').value;
        let choice = document.getElementById('selectMenuTo').value;

        let result = document.getElementById('result');
        if (choice === 'binary') {
            result.value = (+number).toString(2);
        } else {
            result.value = (+number).toString(16).toUpperCase();
        }
    }

}