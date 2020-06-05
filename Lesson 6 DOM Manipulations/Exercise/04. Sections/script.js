function create(words) {
   const elements = document.getElementById('content');

   for (const word of words) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', show);

      elements.appendChild(div);
   }

   function show(e) {
      e.target.firstElementChild.style.display = 'block';
   }
}

function create2(words) {
   const content = document.getElementById('content');

   const resultDivs = words.reduce((result, w) => {
      let divEl = createDiv(w);
      result.push(divEl);
      return result;
   }, []);

   resultDivs.forEach(d => content.appendChild(d));

   function createDiv(text) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = text;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', (e) => {
         e.target.firstElementChild.style.display = 'block';
      });

      return div;
   }
}