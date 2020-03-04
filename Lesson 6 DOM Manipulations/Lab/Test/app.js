document.getElementById("add").addEventListener("click",
        () => {
            const price = document.getElementById('price');
            const items = document.getElementById('items');
            const liToAdd = document.createElement('li');

            liToAdd.textContent = Number(price.textContent) * 100;
            items.appendChild(liToAdd);
        });

document.getElementById("clear").addEventListener("click",
        () => {
            const items = document.getElementById('items');
            items.textContent = '';
        });