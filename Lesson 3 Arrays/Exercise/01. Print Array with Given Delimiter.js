function solve(input) {
    let delimeter = input.pop();

    return input.join(delimeter);
}

console.log(solve([
                    'One', 
                    'Two', 
                    'Three', 
                    'Four', 
                    'Five', 
                    '-'
                  ]));