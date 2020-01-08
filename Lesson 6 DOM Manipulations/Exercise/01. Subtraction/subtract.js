function subtract() {
    const num1 = document.getElementById('firstNumber').value;
    const num2 = document.getElementById('secondNumber').value;
    const result = document.getElementById('result').textContent = +num1 - +num2;
}