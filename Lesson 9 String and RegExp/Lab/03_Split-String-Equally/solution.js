function solve() {
    const input = document.getElementById('text').value;
    const number = Number(document.getElementById('number').value);
    const output = document.getElementById('result');

    let result = input
        .padEnd(Math.ceil(input.length / number) * number, input)
        .match(new RegExp('.'.repeat(number), 'gim'))//'.' looks for every symbol
        .join(' ');

    output.textContent = result;
}