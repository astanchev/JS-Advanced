function rotateArray(inputArr) {
    let counter = Number(inputArr.pop());

    for (let i = 0; i < counter % inputArr.length; i++) {
        let lastElement = inputArr.pop();
        inputArr.unshift(lastElement);
    }

    return inputArr.join(' ');
}

console.log(rotateArray([
                        'Banana', 
                        'Orange', 
                        'Coconut', 
                        'Apple', 
                        '15'
                        ]));