function solve() {
  let links = document.getElementsByTagName('a');

  for (const link of links) {
    link
      .addEventListener('click',
        increaseCount);
  }

  function increaseCount() {
    //'a href:' (the link) and 'p'(the text with counter) are both children of
    //parent with className 'link-1', therefor they are siblings
    let pText = this.nextElementSibling;
    let [firstWord, count, lastWord] = pText.textContent.split(' ');
    pText.textContent = `${firstWord} ${++count} ${lastWord}`;
  }
}