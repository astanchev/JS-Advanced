function solve() {
  let links = document.getElementsByTagName('a');

  for (const link of links) {
    link
      .addEventListener('click',
        increaseCount);
  }

  function increaseCount() {
    let pText = this.nextElementSibling;
    let [firstWord, count, lastWord] = pText.textContent.split(' ');
    pText.textContent = `${firstWord} ${++count} ${lastWord}`;
  }

}