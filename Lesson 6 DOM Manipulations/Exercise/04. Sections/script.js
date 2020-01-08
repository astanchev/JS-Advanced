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