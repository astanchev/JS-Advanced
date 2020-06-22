function solve(){
   const sectionArticles = document.querySelector('main > section');
   const inputAuthor = document.getElementById('creator');
   const inputTitle = document.getElementById('title');
   const inputCategory = document.getElementById('category');
   const inputContent = document.getElementById('content');
   const ulSectionArchive = document.querySelector('section.archive-section > ul');

   const btnCreate = document.querySelector('button.btn.create');

   btnCreate.addEventListener('click', createArticle);

   function createArticle(e) {
      e.preventDefault();

      // Don't make validations where you are not asked for!!!
      // if (!inputAuthor.value || !inputTitle.value || 
      //    !inputCategory.value || !inputContent.value) {
      //    return;
      // }

      const btnDelete = createElement('button', 'Delete', {className: 'btn delete'});
      btnDelete.addEventListener('click', deleteArticle);
      const btnArchive = createElement('button', 'Archive', {className: 'btn archive'});
      btnArchive.addEventListener('click', archiveArticle);

      const article = createElement('article', [
         createElement('h1', inputTitle.value),
         createElement('p', ['Category:', createElement('strong', inputCategory.value)]),
         createElement('p', ['Creator:', createElement('strong', inputAuthor.value)]),
         createElement('p', inputContent.value),
         createElement('div', [btnDelete, btnArchive], {className: 'buttons'})
      ]);
      
      sectionArticles.appendChild(article);

      inputAuthor.value = '';
      inputTitle.value = '';
      inputCategory.value = '';
      inputContent.value = '';
   }

   function deleteArticle(e) {
      e.preventDefault();

      e.target.parentElement.parentElement.remove();
   }

   function archiveArticle(e) {
      e.preventDefault();

      const articleName = e.target.parentElement.parentElement.firstChild.textContent;

      const liToAdd = createElement('li', articleName);
      ulSectionArchive.appendChild(liToAdd);
      
      sortArticles();
      e.target.parentElement.parentElement.remove();      
   }

   function sortArticles() {
      const articles = Array.from(ulSectionArchive.querySelectorAll('li'))
                           .sort((l1, l2) => (l1.textContent.toLowerCase())
                                                .localeCompare
                                                (l2.textContent.toLowerCase()));

      ulSectionArchive.innerHTML = '';
      
      articles.forEach(a => ulSectionArchive.appendChild(a));
   }

   function createElement(type, content, attributes) {
      const result = document.createElement(type);
  
      if (attributes !== undefined) {
          Object.assign(result, attributes);
      }
  
      if (Array.isArray(content)) {
          content.forEach(append);
      } else {
          append(content);
      }
  
      function append(node) {
          if (typeof node === 'string') {
              node = document.createTextNode(node);
          }
  
          result.appendChild(node);
      }
  
      return result;
  }
}
