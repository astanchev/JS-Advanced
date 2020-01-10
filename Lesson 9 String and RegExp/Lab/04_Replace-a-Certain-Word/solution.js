function solve() {
    const word = document.getElementById('word').value;
    const textLines = JSON.parse(document.getElementById('text').value);
    const result = document.getElementById('result');

    result.textContent = '';
    const p = document.createElement('p');

    const replacementWord = textLines[0].split(' ')[2];
    const pattern = new RegExp(replacementWord, 'i');
    const outputList = textLines.map((x) => x.replace(pattern, word));

    outputList.forEach((element) => {
        let pClone = p.cloneNode();
        pClone.textContent = element;
        result.appendChild(pClone);
    });
}