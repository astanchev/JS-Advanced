function solve() {
   const inputName = document.querySelector('input[placeholder="Name"]');
   const inputQuantity = document.querySelector('input[placeholder="Quantity"]');
   const inputPrice = document.querySelector('input[placeholder="Price"]');
   const totalH1 = document.getElementsByTagName('h1')[1];
   const ulSectionProducts = document.querySelector('#products ul');
   const ulSectionMyProducts = document.querySelector('#myProducts ul');

   const btnAdd = document.querySelector('form > button');
   const btnFilter = document.querySelector('div.filter button');
   const btnBuy = document.querySelector('#myProducts button');

   let total = 0;

   btnAdd.addEventListener('click', addItem);
   btnFilter.addEventListener('click', filterItems);
   btnBuy.addEventListener('click', buy);

   function addItem(e) {
      e.preventDefault();

      if (inputName.value === '' ||
         Number(inputQuantity.value) <= 0 ||
         Number(inputPrice.value) <= 0) {
         return;
      }

      const elToAdd = createAvailableProduct();
      ulSectionProducts.appendChild(elToAdd);
      inputName.value = '';
      inputQuantity.value = '';
      inputPrice.value = '';
   }

   function buy(e) {
      e.preventDefault();

      ulSectionMyProducts.innerHTML = '';
      total += 0;
      totalH1.textContent = `Total Price: ${(0).toFixed(2)}`;
   }

   function addToClientsList(e) {
      e.preventDefault();

      const liElements = Array.from(e.target.parentElement.parentElement.children);
      const itemsName = liElements[0].textContent;
      const itemsQuantity = Number(liElements[1].textContent.match(/\d+/));
      const itemsPrice = Number(liElements[2].firstChild.textContent);

      const liToAdd = createElement('li', [
                                          itemsName,
                                          createElement('strong', itemsPrice.toFixed(2))
                                       ]);
      
      ulSectionMyProducts.appendChild(liToAdd);
      
      if (itemsQuantity === 1) {
         e.target.parentElement.parentElement.remove();
      } else {
         liElements[1].textContent = `Available: ${Number(itemsQuantity - 1)}`;
      }

      total += itemsPrice;
      totalH1.textContent = `Total Price: ${total.toFixed(2)}`;
   }  

   function filterItems(e) {
      e.preventDefault();

      const filterText = document.getElementById('filter').value.toLowerCase();
      const availableItems = Array.from(ulSectionProducts.children);

      for (const li of availableItems) {
         if (!li.firstChild.textContent.toLowerCase().includes(filterText)) {
            li.style.display = 'none';
         } else {
            li.style.display = 'block';
         }
      }
   }

   function createAvailableProduct() {
      const liElement = createElement('li',
      [
         createElement('span', inputName.value),
         createElement('strong', `Available: ${Number(inputQuantity.value)}` )        
      ]);

      const div = document.createElement('div');

      const strongEl = createElement('strong', `${Number(inputPrice.value).toFixed(2)}`);
      div.appendChild(strongEl);

      const btnAddToAvailable = createElement('button', 'Add to Client\'s List');
      btnAddToAvailable.addEventListener('click', addToClientsList);
      div.appendChild(btnAddToAvailable);

      liElement.appendChild(div);

      return liElement;
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