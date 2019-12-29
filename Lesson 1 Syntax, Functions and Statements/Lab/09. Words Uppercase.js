function solve(input) {
    let words = input.match(/\w+/g).map(w => w.toUpperCase());

    console.log(words.join(', '));
}

solve('Hi, how are you?');