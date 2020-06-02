function solve() {
    const pattern = /^(\d+(?:\.\d+)?)\s([+\-*/])\s(\d+(?:\.\d+)?)/;
    const compute = {
        '+': (leftOperand, rightOperand) => leftOperand + rightOperand,
        '-': (leftOperand, rightOperand) => leftOperand - rightOperand,
        '*': (leftOperand, rightOperand) => leftOperand * rightOperand,
        '/': (leftOperand, rightOperand) => leftOperand / rightOperand
    };
    const expressionOutput = document.getElementById('expressionOutput');
    const resultOutput = document.getElementById('resultOutput');

    const buttons = Array.from(document.getElementsByTagName('button'))
                            .filter(b => b.value !== 'Clear' && b.value !== '=');
    const clear = document.querySelector('button[value="Clear"]');
    const equal = document.querySelector('button[value="="]');

    for (const button of buttons) {
        button.addEventListener('click', showData);
    }

    clear.addEventListener('click', clearData);
    equal.addEventListener('click', displayData);

    function showData() {
        if (this.value === '+' || 
            this.value === '-' || 
            this.value === '*' || 
            this.value === '/') {
            expressionOutput.textContent += ` ${this.value} `;
        } else {
            expressionOutput.textContent += this.value;
        }
    }

    function clearData() {
        [expressionOutput.textContent, resultOutput.textContent] = ['', ''];
    }

    function displayData() {
        const isReady = expressionOutput.textContent.match(pattern);
        
        if (isReady) {
            const [leftOperand, operator, rightOperand] = isReady[0].split(' ');            
            resultOutput.textContent = compute[operator](Number(leftOperand), Number(rightOperand));
        } else if (!isReady) {
            resultOutput.textContent = 'NaN';
        }
    }
}