function solve() {
  const input = document.getElementById('text').value.split(' ');
  const output = document.getElementById('result');

  const numbers = input.filter(x => !isNaN(x));
  const words = input.filter(x => isNaN(x));

  const resultWords = words
    .reduce((res, w) => {
      res.push(makeASCII(w));
      return res;
    }, []);

  const word = numbers
    .map(n => String.fromCharCode(n))
    .join('');

  resultWords.push(word);

  resultWords.forEach(w => {
    let p = document.createElement('p');
    p.innerHTML = w;
    output.appendChild(p);
  });

  function makeASCII(str) {
    return str
      .split('')
      .map(s => s.charCodeAt(0))
      .join(' ');
  }
}