// 60/100

function realEstateAgency() {
	const roofH1 = document.querySelector('#roof > h1');
	const building = document.getElementById('building');
	const resultMessage = document.getElementById('message');

	const inputRent = document.querySelector('input[name="apartmentRent"]');
	const inputType = document.querySelector('input[name="apartmentType"]');
	const inputCommission = document.querySelector('input[name="agencyCommission"]');
	const btnReg = document.querySelector('button[name="regOffer"]');


	const inputBudget = document.querySelector('input[name="familyBudget"]');
	const inputApartmentType = document.querySelector('input[name="familyApartmentType"]');
	const inputName = document.querySelector('input[name="familyName"]');
	const btnFind = document.querySelector('button[name="findOffer"]');

	btnReg.addEventListener('click', addApartment);
	btnFind.addEventListener('click', findApartment);

	function findApartment(e) {
		e.preventDefault();
		const budget = inputBudget.value;
		const apartmentType = inputApartmentType.value;
		const name = inputName.value;

		if (apartmentType.length === 0 ||
			name.length === 0 ||
			Number(budget) <= 0) {

			clearFindInputs();
			resultMessage.textContent = 'We were unable to find you a home, so sorry :(';
			return;
		}

		findOffer(budget, apartmentType, name);
		clearFindInputs();
	}

	function findOffer(budget, apartmentType, name) {
		const offeredApartments = Array
			.from(document.querySelectorAll('#building > div'))
			.filter(d => !d.innerHTML.includes('button'));

		for (let i = 0; i < offeredApartments.length; i++) {

			const a = offeredApartments[i];
			const parts = [...a.children];

			let rent = Number(parts[0].textContent.split(': ')[1]);
			let type = parts[1].textContent.split(': ')[1];
			let commission = Number(parts[2].textContent.split(': ')[1]);

			let moneyToPay = rent + (commission / 100) * rent;

			if (moneyToPay <= Number(budget) && type === apartmentType) {

				const profit = 2 * (commission / 100) * rent;
				const total = Number(roofH1.textContent.match(/\d+\.?\d+/)) + profit;
				roofH1.textContent = `Agency profit: ${total} lv.`;

				const btnMoveOut = createElement('button', 'MoveOut');
				btnMoveOut.addEventListener('click', (e) => {
					e.preventDefault();
					resultMessage.textContent = `They had found cockroaches in ${name}\'s apartment`;
					e.target.parentElement.remove();
				});

				const pName = createElement('p', name);
				const pText = createElement('p', 'live here now');

				a.innerHTML = '';
				a.style = 'border: 2px solid red;';
				a.appendChild(pName);
				a.appendChild(pText);
				a.appendChild(btnMoveOut);

				resultMessage.textContent = 'Enjoy your new home! :))';

			} else {
				resultMessage.textContent = 'We were unable to find you a home, so sorry :(';
			}
		}
	}

	function clearFindInputs() {
		inputBudget.value = '';
		inputApartmentType.value = '';
		inputName.value = '';
	}

	function addApartment(e) {
		e.preventDefault();
		const rent = inputRent.value;
		const type = inputType.value;
		const commission = inputCommission.value;

		if (isNaN(rent) || Number(rent) <= 0 || isNaN(commission) ||
			Number(commission) < 0 || Number(commission) > 100 ||
			type === '' || type.includes(':')) {

			resultMessage.textContent = 'Your offer registration went wrong, try again.';
		} else {
			postOffer(rent, type, commission);
		}

		clearRegInputs();
	}

	function postOffer(rent, type, commission) {
		const apartment = createElement('div', [
			createElement('p', 'Rent: ' + rent),
			createElement('p', 'Type: ' + type),
			createElement('p', 'Commission: ' + commission),
		], {
			className: 'apartment'
		});

		resultMessage.textContent = 'Your offer was created successfully.';
		building.appendChild(apartment);
	}

	function clearRegInputs() {
		inputRent.value = '';
		inputType.value = '';
		inputCommission.value = '';
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