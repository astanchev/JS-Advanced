function solve() {
   const products = new Set();
   let totalAmount = 0;

   const output = document.getElementsByTagName('textarea')[0];
   const addBtns = [...document.querySelectorAll('div.product-add')];
   addBtns.forEach(b => b.addEventListener('click', addToCart));
   const checkOutBtn = document.querySelector('.checkout');
   checkOutBtn.addEventListener('click', checkOut);

   function addToCart() {
      const productName = this.previousElementSibling.firstElementChild.textContent;
      const productPrice = Number(this.nextElementSibling.textContent);

      products.add(productName);
      totalAmount += productPrice;
      output.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
   }

   function checkOut() {

      const list = [...products].join(', ');

      output.value += `You bought ${list} for ${totalAmount.toFixed(2)}.`;

      addBtns.forEach(b => b.firstElementChild.setAttribute('disabled', ''));
      checkOutBtn.setAttribute('disabled', '');

      //Or other option is:
      // addBtns.forEach(b => b.removeEventListener('click', addToCart));
      // checkOutBtn.removeEventListener('click', checkOut);
   }
}