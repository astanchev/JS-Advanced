function addAndRemove(input) {
    let number = 1;
    let outputArr = [];

    for (let i = 0; i < input.length; i++) {
        
        if (input[i] === 'add') {
            outputArr.push(number);
        } else {
            if (outputArr.length > 0) {
                outputArr.pop();
            }
        }

        number++;
    }

   return outputArr.length > 0 ? outputArr.join('\n') : 'Empty';
}

console.log(addAndRemove(['add', 'add', 'remove', 'add', 'add']));
console.log(addAndRemove(['remove', 'remove', 'remove']));