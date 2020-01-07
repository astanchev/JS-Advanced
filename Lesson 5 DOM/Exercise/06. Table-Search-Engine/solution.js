function solve() {
   const tdList = Array.from(document.querySelectorAll('tbody tr td'));
   tdList.forEach((td, i) => td.setAttribute('id', i));

   const btn = document.getElementById('searchBtn');
   btn.addEventListener('click', searchAndMark);

   function searchAndMark(params) {
      const rows = Array.from(document.querySelectorAll('tbody tr'));
      const query = document.getElementById('searchField').value.toLowerCase();

      rows.forEach(r => r.setAttribute('class', ''));

      if (query.length === 0) {
         return;
      }

      tdList
         .filter((x) => x.textContent
            .toLowerCase()
            .includes(query))
         .forEach((x) => tdList[x.id]
            .parentElement
            .setAttribute('class', 'select'));

      query.value = '';
   }
}