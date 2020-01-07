function solve() {
  let input = document.getElementById('input');
  let output = document.getElementById('output');

  let sentences = input
    .textContent
    .split('.')
    .filter(s => s !== '')
    .map(s => s + '\.');

  while (sentences.length !== 0) {
    let p = document.createElement('p');
    let text = '';

    for (let i = 0; i < 3; i++) {
      if (sentences.length === 0) {
        break;
      }

      text += sentences.shift();
    }

    p.textContent += text;
    output.appendChild(p);
  }
}