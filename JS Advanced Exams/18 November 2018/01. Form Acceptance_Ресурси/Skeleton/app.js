function acceptance() {
	const inputCompany = document.querySelector('input[name="shippingCompany"]');
	const inputName = document.querySelector('input[name="productName"]');
	const inputQuantity = document.querySelector('input[name="productQuantity"]');
	const inputScrape = document.querySelector('input[name="productScrape"]');
	const warehouse = document.getElementById('warehouse');

	const company = inputCompany.value;
	const name = inputName.value;
	const quantity = Number(inputQuantity.value);
	const scrape = Number(inputScrape.value);


	if (company === '' || name === '' || isNaN(quantity) || isNaN(scrape)) {
		return;
	}

	if (quantity <= scrape) {
		return;
	}

	const btnOut = createElement('button', 'Out of stock', {type: 'button'});

	const product = createElement('div', [
		createElement('p', `[${company}] ${name} - ${quantity - scrape} pieces`),
		btnOut
	]);

	btnOut.addEventListener('click', (e) => {
		e.preventDefault();
		e.target.parentElement.remove();
	});

	inputCompany.value = '';
	inputName.value = '';
	inputQuantity.value = '';
	inputScrape.value = '';
	warehouse.appendChild(product);


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