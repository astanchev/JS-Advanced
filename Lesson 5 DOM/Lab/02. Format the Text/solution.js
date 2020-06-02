function solve() {
  const sentences = document
    .getElementById('input')
    .textContent
    .split('.')
    .filter(Boolean);

  const output = document
  .getElementById('output');

  while (sentences.length != 0) {
    const p = document.createElement('p');
    p.textContent = '';

    for (let i = 0; i < 3; i++) {
      if (sentences.length == 0) {
        break;
      }
      p.textContent += sentences.shift() + '.';
    }

    output.appendChild(p);
  }
}