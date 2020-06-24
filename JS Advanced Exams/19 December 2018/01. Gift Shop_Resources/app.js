//You don't have to add event listener to add button for Judge
//it is not at least 50, but max 50!!!

function solution() {
	const inputType = document.getElementById('toyType');
	const inputPrice = document.getElementById('toyPrice');
	const inputDescription = document.getElementById('toyDescription');
	const sectionGifts = document.getElementById('christmasGiftShop');

	const type = inputType.value;
	const price = inputPrice.value;
	const description = inputDescription.value;

	if (type && !isNaN(price) &&
	description.length > 0 && description.length <= 50) {

		const btnBuy = createElement('button', `Buy it for $${price}`);

		const gift = createElement('div', [
			createElement('img', '', {src: './gift.png'}),
			createElement('h2', type),
			createElement('p', description),
			btnBuy
		], {
			className: 'gift'
		});

		btnBuy.addEventListener('click', () => {
			gift.remove();
		});

		sectionGifts.appendChild(gift);
	}

	inputType.value = '';
	inputPrice.value = '';
	inputDescription.value = '';

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