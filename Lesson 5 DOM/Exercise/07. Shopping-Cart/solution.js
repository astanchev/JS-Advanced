function solve() {
   const cart = new Map();
   const textarea = document.getElementsByTagName('textarea')[0];
   const btnCheckOut = document.getElementsByClassName('checkout')[0];
   const addProducts = Array.from(document.getElementsByClassName('add-product'));
   addProducts.forEach(b => b.addEventListener('click', addToCart));

   btnCheckOut.addEventListener('click', checkOut);

   function addToCart() {
      let productName = this.parentElement
         .previousElementSibling
         .firstElementChild
         .textContent;
      let productPrice = this.parentElement
         .nextElementSibling
         .textContent;

      textarea.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;

      if (!cart.has(productName)) {
         cart.set(productName, 0);
      }

      let newSum = cart.get(productName) + Number(productPrice);
      cart.set(productName, newSum);
   }

   function checkOut() {
      const products = Array.from(cart.keys());
      const displayedProducts = products.join(', ');
      const sum = (Array.from(cart.values())).reduce((a, b) => a + b, 0);

      textarea.textContent += `You bought ${displayedProducts} for ${sum.toFixed(2)}.`;

      btnCheckOut.removeEventListener('click', checkOut);
      addProducts.forEach(b => b.removeEventListener('click', addToCart));
   }
}